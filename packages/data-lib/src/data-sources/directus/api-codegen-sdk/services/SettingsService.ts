/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Settings } from '../models/Settings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SettingsService {

    /**
     * Retrieve Settings
     * List the settings.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getSettings({
        limit,
        offset,
        meta,
        page,
    }: {
        /** A limit on the number of objects that are returned. **/
        limit?: number,
        /** How many items to skip when fetching data. **/
        offset?: number,
        /** What metadata to return in the response. **/
        meta?: string,
        /** Cursor for use in pagination. Often used in combination with limit. **/
        page?: number,
    }): CancelablePromise<{
        data?: Settings;
    }> {
        return __request({
            method: 'GET',
            path: `/settings`,
            query: {
                'limit': limit,
                'offset': offset,
                'meta': meta,
                'page': page,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Update Settings
     * Update the settings
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateSetting({
        requestBody,
    }: {
        requestBody?: any,
    }): CancelablePromise<{
        data?: Settings;
    }> {
        return __request({
            method: 'PATCH',
            path: `/settings`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}