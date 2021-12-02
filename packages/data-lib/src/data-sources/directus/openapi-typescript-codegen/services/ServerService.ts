/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ServerService {

    /**
     * System Info
     * Perform a system status check and return the options.
     * @returns any Successful request
     * @throws ApiError
     */
    public static serverInfo({
        superAdminToken,
    }: {
        /** The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. **/
        superAdminToken: number,
    }): CancelablePromise<{
        data?: any;
    }> {
        return __request({
            method: 'GET',
            path: `/server/info`,
            query: {
                'super_admin_token': superAdminToken,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Ping
     * Ping, pong. Ping.. pong.
     * @returns string Successful request
     * @throws ApiError
     */
    public static ping(): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/server/ping`,
        });
    }

}