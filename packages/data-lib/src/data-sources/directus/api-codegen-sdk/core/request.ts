/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { AbortController } from 'abort-controller';
import FormData from 'form-data';
import fetch, { BodyInit, Headers, RequestInit, Response } from 'node-fetch';
import { types } from 'util';

import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import { OpenAPI } from './OpenAPI';

function isDefined<T>(value: T | null | undefined): value is Exclude<T, null | undefined> {
    return value !== undefined && value !== null;
}

function isString(value: any): value is string {
    return typeof value === 'string';
}

function isStringWithValue(value: any): value is string {
    return isString(value) && value !== '';
}

function isBlob(value: any): value is Blob {
    return value instanceof Blob;
}

function isBinary(value: any): value is Buffer | ArrayBuffer | ArrayBufferView {
    const isBuffer = Buffer.isBuffer(value);
    const isArrayBuffer = types.isArrayBuffer(value);
    const isArrayBufferView = types.isArrayBufferView(value);
    return isBuffer || isArrayBuffer || isArrayBufferView;
}

function base64(str: string): string {
    try {
        return btoa(str);
    } catch (err) {
        return Buffer.from(str).toString('base64');
    }
}

function getQueryString(params: Record<string, any>): string {
    const qs: string[] = [];

    Object.keys(params).forEach(key => {
        const value = params[key];
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(value => {
                    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
                });
            } else {
                qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
            }
        }
    });

    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }

    return '';
}

function getUrl(options: ApiRequestOptions): string {
    const path = OpenAPI.ENCODE_PATH ? OpenAPI.ENCODE_PATH(options.path) : options.path;
    const url = `${OpenAPI.BASE}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }

    return url;
}

function getFormData(options: ApiRequestOptions): FormData | undefined {
    if (options.formData) {
        const formData = new FormData();

        Object.keys(options.formData).forEach(key => {
            const value = options.formData?.[key];
            if (isDefined(value)) {
                formData.append(key, value);
            }
        });

        return formData;
    }
    return;
}

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

async function resolve<T>(options: ApiRequestOptions, resolver?: T | Resolver<T>): Promise<T | undefined> {
    if (typeof resolver === 'function') {
        return (resolver as Resolver<T>)(options);
    }
    return resolver;
}

async function getHeaders(options: ApiRequestOptions): Promise<Headers> {
    const token = await resolve(options, OpenAPI.TOKEN);
    const username = await resolve(options, OpenAPI.USERNAME);
    const password = await resolve(options, OpenAPI.PASSWORD);
    const additionalHeaders = await resolve(options, OpenAPI.HEADERS);

    const defaultHeaders = Object.entries({
        Accept: 'application/json',
        ...additionalHeaders,
        ...options.headers,
    })
        .filter(([_, value]) => isDefined(value))
        .reduce((headers, [key, value]) => ({
            ...headers,
            [key]: value,
        }), {});

    const headers = new Headers(defaultHeaders);

    if (isStringWithValue(token)) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`);
        headers.append('Authorization', `Basic ${credentials}`);
    }

    if (options.body) {
        if (options.mediaType) {
            headers.append('Content-Type', options.mediaType);
        } else if (isBinary(options.body)) {
            headers.append('Content-Type', 'application/octet-stream');
        } else if (isString(options.body)) {
            headers.append('Content-Type', 'text/plain');
        } else {
            headers.append('Content-Type', 'application/json');
        }
    }
    return headers;
}

function getRequestBody(options: ApiRequestOptions): BodyInit | undefined {
    if (options.body) {
        if (options.mediaType?.includes('/json')) {
            return JSON.stringify(options.body)
        } else if (isString(options.body) || isBlob(options.body) || isBinary(options.body)) {
            return options.body as any;
        } else {
            return JSON.stringify(options.body);
        }
    }
    return;
}

async function sendRequest(
    options: ApiRequestOptions,
    url: string,
    formData: FormData | undefined,
    body: BodyInit | undefined,
    headers: Headers,
    onCancel: OnCancel
): Promise<Response> {
    const controller = new AbortController();

    const request: RequestInit = {
        headers,
        method: options.method,
        body: body || formData,
        signal: controller.signal,
    };

    onCancel(() => controller.abort());

    return await fetch(url, request);
}

function getResponseHeader(response: Response, responseHeader?: string): string | undefined {
    if (responseHeader) {
        const content = response.headers.get(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return;
}

async function getResponseBody(response: Response): Promise<any> {
    if (response.status !== 204) {
        try {
            const contentType = response.headers.get('Content-Type');
            if (contentType) {
                const isJSON = contentType.toLowerCase().startsWith('application/json');
                if (isJSON) {
                    return await response.json();
                } else {
                    return await response.text();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    return;
}

function catchErrors(options: ApiRequestOptions, result: ApiResult): void {
    const errors: Record<number, string> = {
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        ...options.errors,
    }

    const error = errors[result.status];
    if (error) {
        throw new ApiError(result, error);
    }

    if (!result.ok) {
        throw new ApiError(result, 'Generic Error');
    }
}

/**
 * Request using node-fetch client
 * @param options The request options from the the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export function request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return new CancelablePromise(async (resolve, reject, onCancel) => {
        try {
            const url = getUrl(options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = await getHeaders(options);

            if (!onCancel.isCancelled) {
                const response = await sendRequest(options, url, formData, body, headers, onCancel);
                const responseBody = await getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);

                const result: ApiResult = {
                    url,
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader || responseBody,
                };

                catchErrors(options, result);

                resolve(result.body);
            }
        } catch (error) {
            reject(error);
        }
    });
}