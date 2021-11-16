/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemsPosts } from '../models/ItemsPosts';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ItemsService {

    /**
     * Create an Item
     * Create a new posts item.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createItemsPosts({
        meta,
        requestBody,
    }: {
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: (Array<ItemsPosts> | ItemsPosts),
    }): CancelablePromise<{
        data?: any;
    }> {
        return __request({
            method: 'POST',
            path: `/items/posts`,
            query: {
                'meta': meta,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * List Items
     * List the posts items.
     * @returns any Successful request
     * @throws ApiError
     */
    public static readItemsPosts({
        fields,
        limit,
        meta,
        offset,
        sort,
        filter,
        search,
    }: {
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** A limit on the number of objects that are returned. **/
        limit?: number,
        /** What metadata to return in the response. **/
        meta?: string,
        /** How many items to skip when fetching data. **/
        offset?: number,
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *  **/
        sort?: Array<string>,
        /** Select items in collection by given conditions. **/
        filter?: Array<string>,
        /** Filter by items that contain the given search query in one of their fields. **/
        search?: string,
    }): CancelablePromise<{
        data?: Array<ItemsPosts>;
    }> {
        return __request({
            method: 'GET',
            path: `/items/posts`,
            query: {
                'fields': fields,
                'limit': limit,
                'meta': meta,
                'offset': offset,
                'sort': sort,
                'filter': filter,
                'search': search,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Retrieve an Item
     * Retrieve a single posts item by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static readSingleItemsPosts({
        id,
        fields,
        meta,
    }: {
        /** Index of the item. **/
        id: (number | string),
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
    }): CancelablePromise<{
        data?: any;
    }> {
        return __request({
            method: 'GET',
            path: `/items/posts/${id}`,
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
     * Update an Item
     * Update an existing posts item.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateSingleItemsPosts({
        id,
        fields,
        meta,
        requestBody,
    }: {
        /** Index of the item. **/
        id: (number | string),
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: ItemsPosts,
    }): CancelablePromise<{
        data?: any;
    }> {
        return __request({
            method: 'PATCH',
            path: `/items/posts/${id}`,
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
     * Delete an Item
     * Delete an existing posts item.
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteSingleItemsPosts({
        id,
    }: {
        /** Index of the item. **/
        id: (number | string),
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/items/posts/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}