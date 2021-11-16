/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Users } from '../models/Users';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * List Users
     * List the users.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getUsers({
        fields,
        limit,
        offset,
        meta,
        sort,
        filter,
        search,
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
    }): CancelablePromise<{
        data?: Array<Users>;
    }> {
        return __request({
            method: 'GET',
            path: `/users`,
            query: {
                'fields': fields,
                'limit': limit,
                'offset': offset,
                'meta': meta,
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
     * Create a User
     * Create a new user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createUser({
        meta,
        requestBody,
    }: {
        /** What metadata to return in the response. **/
        meta?: string,
        requestBody?: Users,
    }): CancelablePromise<{
        data?: Users;
    }> {
        return __request({
            method: 'POST',
            path: `/users`,
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
     * Retrieve a User
     * Retrieve a single user by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getUser({
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
        data?: Users;
    }> {
        return __request({
            method: 'GET',
            path: `/users/${id}`,
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
     * Update a User
     * Update an existing user
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateUser({
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
        requestBody?: Users,
    }): CancelablePromise<{
        data?: any;
    }> {
        return __request({
            method: 'PATCH',
            path: `/users/${id}`,
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
     * Delete a User
     * Delete an existing user
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteUser({
        id,
    }: {
        /** Unique identifier for the object. **/
        id: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/users/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Invite User(s)
     * Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account.
     * @returns any Successful request
     * @throws ApiError
     */
    public static invite({
        requestBody,
    }: {
        requestBody?: {
            /**
             * Email address or array of email addresses of the to-be-invited user(s).
             */
            email?: string;
        },
    }): CancelablePromise<{
        data?: Users;
    }> {
        return __request({
            method: 'POST',
            path: `/users/invite`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Accept User Invite
     * Accepts and enables an invited user using a JWT invitation token.
     * @returns any Successful request
     * @throws ApiError
     */
    public static acceptInvite({
        requestBody,
    }: {
        requestBody: {
            /**
             * Accept invite token.
             */
            token?: string;
            /**
             * Password of the user.
             */
            password?: string;
        },
    }): CancelablePromise<{
        data?: Users;
    }> {
        return __request({
            method: 'POST',
            path: `/users/invite/accept`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Retrieve Current User
     * Retrieve the currently authenticated user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getMe({
        fields,
        meta,
    }: {
        /** Control what fields are being returned in the object. **/
        fields?: Array<string>,
        /** What metadata to return in the response. **/
        meta?: string,
    }): CancelablePromise<{
        data?: Users;
    }> {
        return __request({
            method: 'GET',
            path: `/users/me`,
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
     * Update Current User
     * Update the currently authenticated user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateMe(): CancelablePromise<{
        data?: Users;
    }> {
        return __request({
            method: 'PATCH',
            path: `/users/me`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Update Last Page
     * Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used.
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateLastUsedPageMe({
        requestBody,
    }: {
        requestBody?: {
            /**
             * Path of the page you used last.
             */
            last_page?: string;
        },
    }): CancelablePromise<any> {
        return __request({
            method: 'PATCH',
            path: `/users/me/track/page`,
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Enable 2FA
     * Enables two-factor authentication for the currently authenticated user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static meTfaEnable(): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/users/me/tfa/enable`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Disable 2FA
     * Disables two-factor authentication for the currently authenticated user.
     * @returns any Successful request
     * @throws ApiError
     */
    public static meTfaDisable(): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/users/me/tfa/disable`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}