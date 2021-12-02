/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityService {

    /**
     * List Activity Actions
     * Returns a list of activity actions.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getActivities({
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
        data?: Array<Activity>;
    }> {
        return __request({
            method: 'GET',
            path: `/activity`,
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
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Create a Comment
     * Creates a new comment.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createComment({
        meta,
        requestBody,
    }: {
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            collection: string;
            item: number;
            comment: string;
        },
    }): CancelablePromise<{
        data?: Activity;
    }> {
        return __request({
            method: 'POST',
            path: `/activity/comment`,
            query: {
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
     * Retrieve an Activity Action
     * Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getActivity({
        id,
        fields,
        meta,
    }: {
        /** Index **/
        id: number,
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
    }): CancelablePromise<{
        data?: Activity;
    }> {
        return __request({
            method: 'GET',
            path: `/activity/${id}`,
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
     * Update a Comment
     * Update the content of an existing comment.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateComment({
        id,
        meta,
        requestBody,
    }: {
        /** Index **/
        id: number,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            comment?: string;
        },
    }): CancelablePromise<{
        data?: Activity;
    }> {
        return __request({
            method: 'PATCH',
            path: `/activity/comment/${id}`,
            query: {
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
     * Delete a Comment
     * Delete an existing comment. Deleted comments can not be retrieved.
     * @returns any Deleted succsessfully
     * @throws ApiError
     */
    public static deleteComment({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/activity/comment/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}