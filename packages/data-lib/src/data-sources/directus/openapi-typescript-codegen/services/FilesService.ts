/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Files } from '../models/Files';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class FilesService {

    /**
     * List Files
     * List the files.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getFiles(): CancelablePromise<{
        data?: Array<Files>;
    }> {
        return __request({
            method: 'GET',
            path: `/files`,
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Create a File
     * Create a new file
     * @returns any Successful request
     * @throws ApiError
     */
    public static createFile({
        requestBody,
    }: {
        requestBody?: {
            data?: string;
        },
    }): CancelablePromise<{
        data?: Files;
    }> {
        return __request({
            method: 'POST',
            path: `/files`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Retrieve a Files
     * Retrieve a single file by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getFile({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<{
        data?: Files;
    }> {
        return __request({
            method: 'GET',
            path: `/files/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Update a File
     * Update an existing file.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateFile({
        id,
        requestBody,
    }: {
        /** Index **/
        id: number,
        requestBody?: any,
    }): CancelablePromise<{
        data?: Files;
    }> {
        return __request({
            method: 'PATCH',
            path: `/files/${id}`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Delete a File
     * Delete an existing file.
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteFile({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/files/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

}