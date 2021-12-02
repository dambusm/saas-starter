/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Revisions } from '../models/Revisions';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RevisionsService {

    /**
     * List Revisions
     * List the revisions.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRevisions({
        fields,
        limit,
        offset,
        meta,
        sort,
        filter,
        search,
        page,
    }: {
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** A limit on the number of objects that are returned. **/
        limit?: number,
        /** How many items to skip when fetching data. **/
        offset?: number,
        /** What metadata to return in the response. **/
        meta?: string,
        /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.
         *  **/
        sort?: Array<string>,
        /** Select items in collection by given conditions. **/
        filter?: Array<string>,
        /** Filter by items that contain the given search query in one of their fields. **/
        search?: string,
        /** Cursor for use in pagination. Often used in combination with limit. **/
        page?: number,
    }): CancelablePromise<{
        data?: Array<Revisions>;
    }> {
        return __request({
            method: 'GET',
            path: `/revisions`,
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'meta': meta,
                'sort': sort,
                'filter': filter,
                'search': search,
                'page': page,
            },
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Retrieve a Revision
     * Retrieve a single revision by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRevision({
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
        data?: Revisions;
    }> {
        return __request({
            method: 'GET',
            path: `/revisions/${id}`,
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

}