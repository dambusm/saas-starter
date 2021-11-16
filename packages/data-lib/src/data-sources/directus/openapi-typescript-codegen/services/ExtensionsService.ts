/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ExtensionsService {

    /**
     * List Interfaces
     * List all installed custom interfaces.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getInterfaces(): CancelablePromise<{
        data?: Array<any>;
    }> {
        return __request({
            method: 'GET',
            path: `/extensions/interfaces`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * List Layouts
     * List all installed custom layouts.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getLayouts(): CancelablePromise<{
        data?: Array<any>;
    }> {
        return __request({
            method: 'GET',
            path: `/extensions/layouts`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * List Displays
     * List all installed custom displays.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getDisplays(): CancelablePromise<{
        data?: Array<any>;
    }> {
        return __request({
            method: 'GET',
            path: `/extensions/displays`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * List Modules
     * List all installed custom modules.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getModules(): CancelablePromise<{
        data?: Array<any>;
    }> {
        return __request({
            method: 'GET',
            path: `/extensions/modules`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}