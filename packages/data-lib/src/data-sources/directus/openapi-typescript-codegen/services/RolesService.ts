/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Roles } from '../models/Roles';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * List Roles
     * List the roles.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRoles({
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
        data?: Array<Roles>;
    }> {
        return __request({
            method: 'GET',
            path: `/roles`,
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
     * Create a Role
     * Create a new role.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createRole({
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
             * Description of the role.
             */
            description?: string;
            /**
             * Whether or not this role enforces the use of 2FA.
             */
            enforce_2fa?: boolean;
            /**
             * ID used with external services in SCIM.
             */
            external_id?: string;
            /**
             * Array of IP addresses that are allowed to connect to the API as a user of this role.
             */
            ip_whitelist?: Array<string>;
            /**
             * Custom override for the admin app module bar navigation.
             */
            module_listing?: string;
            /**
             * Name of the role.
             */
            name?: string;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return __request({
            method: 'POST',
            path: `/roles`,
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
     * Retrieve a Role
     * Retrieve a single role by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getRole({
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
        data?: Roles;
    }> {
        return __request({
            method: 'GET',
            path: `/roles/${id}`,
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
     * Update a Role
     * Update an existing role
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateRole({
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
             * Description of the role.
             */
            description?: string;
            /**
             * Whether or not this role enforces the use of 2FA.
             */
            enforce_2fa?: boolean;
            /**
             * ID used with external services in SCIM.
             */
            external_id?: string;
            /**
             * Array of IP addresses that are allowed to connect to the API as a user of this role.
             */
            ip_whitelist?: Array<string>;
            /**
             * Custom override for the admin app module bar navigation.
             */
            module_listing?: string;
            /**
             * Name of the role.
             */
            name?: string;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return __request({
            method: 'PATCH',
            path: `/roles/${id}`,
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
     * Delete a Role
     * Delete an existing role
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteRole({
        id,
    }: {
        /** Unique identifier for the object. **/
        id: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/roles/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}