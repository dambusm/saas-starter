/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Presets } from '../models/Presets';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PresetsService {

    /**
     * List Presets
     * List the presets.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getPresets({
        fields,
        limit,
        offset,
        page,
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
        /** Cursor for use in pagination. Often used in combination with limit. **/
        page?: number,
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
        data?: Array<Presets>;
    }> {
        return __request({
            method: 'GET',
            path: `/presets`,
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'page': page,
                'sort': sort,
                'filter': filter,
                'search': search,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Create a Preset
     * Create a new preset.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createPreset({
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
             * What collection this collection preset is used for.
             */
            collection: string;
            /**
             * Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.
             */
            title?: string;
            /**
             * The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.
             */
            role?: string;
            /**
             * What the user searched for in search/filter in the header bar.
             */
            search?: string;
            filters?: Array<{
                key?: string;
                field?: string;
                operator?: string;
                value?: number;
            }>;
            /**
             * Name of the view type that is used.
             */
            layout?: string;
            /**
             * Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.
             */
            layout_query?: string;
            /**
             * Options of the views. The properties in here are controlled by the layout.
             */
            layout_options?: string;
        },
    }): CancelablePromise<{
        data?: Presets;
    }> {
        return __request({
            method: 'POST',
            path: `/presets`,
            query: {
                'fields': fields,
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
     * Retrieve a Preset
     * Retrieve a single preset by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getPreset({
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
        data?: Presets;
    }> {
        return __request({
            method: 'GET',
            path: `/presets/${id}`,
            query: {
                'fields': fields,
                'meta': meta,
            },
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

    /**
     * Update a Preset
     * Update an existing preset.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updatePreset({
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
             * What collection this collection preset is used for.
             */
            collection: string;
            /**
             * Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.
             */
            title?: string;
            /**
             * The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.
             */
            role?: number;
            /**
             * What the user searched for in search/filter in the header bar.
             */
            search_query?: string;
            filters?: Array<{
                field?: string;
                operator?: string;
                value?: number;
            }>;
            /**
             * Name of the view type that is used. Defaults to tabular.
             */
            view_type?: string;
            /**
             * View query that's saved per view type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.
             */
            view_query?: string;
            /**
             * Options of the views. The properties in here are controlled by the layout.
             */
            view_options?: string;
            /**
             * Key value pair of language-translation. Can be used to translate the bookmark title in multiple languages.
             */
            translation?: any;
        },
    }): CancelablePromise<{
        data?: Presets;
    }> {
        return __request({
            method: 'PATCH',
            path: `/presets/${id}`,
            query: {
                'fields': fields,
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
     * Delete a Preset
     * Delete an existing preset.
     * @returns any Successful request
     * @throws ApiError
     */
    public static deletePreset({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/presets/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
            },
        });
    }

}