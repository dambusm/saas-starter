/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AssetsService {

    /**
     * Get an Asset
     * Image typed files can be dynamically resized and transformed to fit any need.
     * @returns string Successful request
     * @throws ApiError
     */
    public static getAsset({
        id,
        key,
        transforms,
        download,
    }: {
        /** The id of the file. **/
        id: string,
        /** The key of the asset size configured in settings. **/
        key?: string,
        /** A JSON array of image transformations **/
        transforms?: string,
        /** Download the asset to your computer **/
        download?: boolean,
    }): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/assets/${id}`,
            query: {
                'key': key,
                'transforms': transforms,
                'download': download,
            },
            errors: {
                404: `Error: Not found.`,
            },
        });
    }

}