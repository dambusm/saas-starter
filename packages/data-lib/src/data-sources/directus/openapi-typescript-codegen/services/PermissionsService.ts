/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Permissions } from '../models/Permissions';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PermissionsService {

    /**
     * List Permissions
     * List all permissions.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getPermissions({
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
        data?: Array<Permissions>;
    }> {
        return __request({
            method: 'GET',
            path: `/permissions`,
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
     * Create a Permission
     * Create a new permission.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createPermission({
        meta,
        requestBody,
    }: {
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            /**
             * What collection this permission applies to.
             */
            collection?: string;
            /**
             * If the user can post comments.
             */
            comment?: 'none' | 'create' | 'update' | 'full';
            /**
             * If the user can create items.
             */
            create?: 'none' | 'full';
            /**
             * If the user can update items.
             */
            delete?: 'none' | 'mine' | 'role' | 'full';
            /**
             * If the user is required to leave a comment explaining what was changed.
             */
            explain?: 'none' | 'create' | 'update' | 'always';
            /**
             * If the user can read items.
             */
            read?: 'none' | 'mine' | 'role' | 'full';
            /**
             * Unique identifier of the role this permission applies to.
             */
            role?: number;
            /**
             * Explicitly denies read access for specific fields.
             */
            read_field_blacklist?: Array<string>;
            /**
             * What status this permission applies to.
             */
            status?: string;
            /**
             * Explicitly denies specific statuses to be used.
             */
            status_blacklist?: Array<string>;
            /**
             * If the user can update items.
             */
            update?: 'none' | 'mine' | 'role' | 'full';
            /**
             * Explicitly denies write access for specific fields.
             */
            write_field_blacklist?: Array<string>;
        },
    }): CancelablePromise<{
        data?: Permissions;
    }> {
        return __request({
            method: 'POST',
            path: `/permissions`,
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
     * List My Permissions
     * List the permissions that apply to the current user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getMyPermissions(): CancelablePromise<{
        data?: Array<Permissions>;
    }> {
        return __request({
            method: 'GET',
            path: `/permissions/me`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Retrieve a Permission
     * Retrieve a single permissions object by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getPermission({
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
        data?: Permissions;
    }> {
        return __request({
            method: 'GET',
            path: `/permissions/${id}`,
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
     * Update a Permission
     * Update an existing permission
     * @returns any Successful request
     * @throws ApiError
     */
    public static updatePermission({
        id,
        meta,
        requestBody,
    }: {
        /** Index **/
        id: number,
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: {
            /**
             * What collection this permission applies to.
             */
            collection?: any;
            /**
             * If the user can post comments. `full`.
             */
            comment?: 'none' | 'create' | 'update';
            /**
             * If the user can create items.
             */
            create?: 'none' | 'full';
            /**
             * If the user can update items.
             */
            delete?: 'none' | 'mine' | 'role' | 'full';
            /**
             * If the user is required to leave a comment explaining what was changed.
             */
            explain?: 'none' | 'create' | 'update' | 'always';
            /**
             * If the user can read items.
             */
            read?: 'none' | 'mine' | 'role' | 'full';
            /**
             * Explicitly denies read access for specific fields.
             */
            read_field_blacklist?: any;
            /**
             * Unique identifier of the role this permission applies to.
             */
            role?: any;
            /**
             * What status this permission applies to.
             */
            status?: any;
            /**
             * Explicitly denies specific statuses to be used.
             */
            status_blacklist?: any;
            /**
             * If the user can update items.
             */
            update?: 'none' | 'mine' | 'role' | 'full';
            /**
             * Explicitly denies write access for specific fields.
             */
            write_field_blacklist?: any;
        },
    }): CancelablePromise<{
        data?: Permissions;
    }> {
        return __request({
            method: 'PATCH',
            path: `/permissions/${id}`,
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
     * Delete a Permission
     * Delete an existing permission
     * @returns any Successful request
     * @throws ApiError
     */
    public static deletePermission({
        id,
    }: {
        /** Index **/
        id: number,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/permissions/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}