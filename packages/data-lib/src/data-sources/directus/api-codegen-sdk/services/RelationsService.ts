/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Relations } from '../models/Relations';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RelationsService {

    /**
     * List Relations
     * List the relations.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRelations({
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
        data?: Array<Relations>;
    }> {
        return __request({
            method: 'GET',
            path: `/relations`,
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
     * Create a Relation
     * Create a new relation.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createRelation({
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
             * Collection that has the field that holds the foreign key.
             */
            collection_many?: string;
            /**
             * Collection on the _one_ side of the relationship.
             */
            collection_one?: string;
            /**
             * Foreign key. Field that holds the primary key of the related collection.
             */
            field_many?: string;
            /**
             * Alias column that serves as the _one_ side of the relationship.
             */
            field_one?: string;
            /**
             * Field on the junction table that holds the primary key of the related collection.
             */
            junction_field?: string;
        },
    }): CancelablePromise<{
        data?: Relations;
    }> {
        return __request({
            method: 'POST',
            path: `/relations`,
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
     * Retrieve a Relation
     * Retrieve a single relation by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRelation({
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
        data?: Relations;
    }> {
        return __request({
            method: 'GET',
            path: `/relations/${id}`,
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
     * Update a Relation
     * Update an existing relation
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateRelation({
        id,
        fields,
        meta,
        requestBody,
    }: {
        /** Index **/
        id: number,
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            /**
             * Collection that has the field that holds the foreign key.
             */
            collection_many?: string;
            /**
             * Collection on the _one_ side of the relationship.
             */
            collection_one?: string;
            /**
             * Foreign key. Field that holds the primary key of the related collection.
             */
            field_many?: string;
            /**
             * Alias column that serves as the _one_ side of the relationship.
             */
            field_one?: string;
            /**
             * Field on the junction table that holds the primary key of the related collection.
             */
            junction_field?: string;
        },
    }): CancelablePromise<{
        data?: Relations;
    }> {
        return __request({
            method: 'PATCH',
            path: `/relations/${id}`,
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
     * Delete a Relation
     * Delete an existing relation.
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteRelation({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/relations/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}