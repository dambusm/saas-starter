/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folders } from '../models/Folders';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class FoldersService {

    /**
     * List Folders
     * List the folders.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getFolders({
        fields,
        limit,
        offset,
        sort,
        filter,
        search,
        meta,
    }: {
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** A limit on the number of objects that are returned. **/
        limit?: number,
        /** How many items to skip when fetching data. **/
        offset?: number,
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *  **/
        sort?: Array<string>,
        /** Select items in collection by given conditions. **/
        filter?: Array<string>,
        /** Filter by items that contain the given search query in one of their fields. **/
        search?: string,
        /** What metadata to return in the response. **/
        meta?: string,
    }): CancelablePromise<{
        data?: Array<Folders>;
    }> {
        return __request({
            method: 'GET',
            path: `/folders`,
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'sort': sort,
                'filter': filter,
                'search': search,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Create a Folder
     * Create a new folder.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createFolder({
        fields,
        meta,
        requestBody,
    }: {
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            /**
             * Name of the folder.
             */
            name: string;
            /**
             * Unique identifier of the parent folder. This allows for nested folders.
             */
            parent?: number;
        },
    }): CancelablePromise<{
        data?: Folders;
    }> {
        return __request({
            method: 'POST',
            path: `/folders`,
            query: {
                'fields': fields,
                'meta': meta,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Retrieve a Folder
     * Retrieve a single folder by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getFolder({
        id,
        fields,
        meta,
    }: {
        /** Unique identifier for the object. **/
        id: string,
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
    }): CancelablePromise<{
        data?: Folders;
    }> {
        return __request({
            method: 'GET',
            path: `/folders/${id}`,
            query: {
                'fields': fields,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Update a Folder
     * Update an existing folder
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateFolder({
        id,
        fields,
        meta,
        requestBody,
    }: {
        /** Unique identifier for the object. **/
        id: string,
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            /**
             * Name of the folder. Can't be null or empty.
             */
            name?: string;
            /**
             * Unique identifier of the parent folder. This allows for nested folders.
             */
            parent?: number;
        },
    }): CancelablePromise<{
        data?: Folders;
    }> {
        return __request({
            method: 'PATCH',
            path: `/folders/${id}`,
            query: {
                'fields': fields,
                'meta': meta,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Delete a Folder
     * Delete an existing folder
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteFolder({
        id,
    }: {
        /** Unique identifier for the object. **/
        id: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/folders/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}