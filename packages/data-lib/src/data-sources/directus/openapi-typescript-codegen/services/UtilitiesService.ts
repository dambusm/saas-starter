/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UtilitiesService {

    /**
     * Get a Random String
     * Returns a random string of given length.
     * @returns any Successful request
     * @throws ApiError
     */
    public static random({
        length,
    }: {
        /** Length of the random string. **/
        length?: number,
    }): CancelablePromise<{
        data?: string;
    }> {
        return __request({
            method: 'GET',
            path: `/utils/random/string`,
            query: {
                'length': length,
            },
        });
    }

    /**
     * Sort Items
     * Re-sort items in collection based on start and to value of item
     * @returns any Successful request
     * @throws ApiError
     */
    public static sort({
        collection,
        requestBody,
    }: {
        /** Collection identifier **/
        collection: string,
        requestBody?: any,
    }): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/utils/sort/${collection}`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}