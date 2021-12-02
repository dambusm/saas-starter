/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Roles } from '../models/Roles';
import type { Webhooks } from '../models/Webhooks';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * List Webhooks
     * Get all webhooks.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getWebhooks(): CancelablePromise<{
        data?: Webhooks;
    }> {
        return __request({
            method: 'GET',
            path: `/webhooks`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Create a Webhook
     * Create a new webhook.
     * @returns any Successful request
     * @throws ApiError
     */
    public static createWebhook({
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
             * The name of the webhook.
             */
            name?: string;
            /**
             * Method used in the webhook.
             */
            method?: string;
            /**
             * The url of the webhook.
             */
            url?: string;
            /**
             * The status of the webhook.
             */
            status?: string;
            /**
             * If yes, send the content of what was done
             */
            data?: boolean;
            /**
             * The actions that triggers this webhook.
             */
            actions?: any;
            /**
             * The collections that triggers this webhook.
             */
            'system-collections'?: any;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return __request({
            method: 'POST',
            path: `/webhooks`,
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
     * Retrieve a Webhook
     * Retrieve a single webhook by unique identifier.
     * @returns any Successful request
     * @throws ApiError
     */
    public static getWebhook({
        id,
    }: {
        /** Unique identifier for the object. **/
        id: string,
    }): CancelablePromise<{
        data?: Webhooks;
    }> {
        return __request({
            method: 'GET',
            path: `/webhooks/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

    /**
     * Update a Webhook
     * Update an existing webhook
     * @returns any Successful request
     * @throws ApiError
     */
    public static updateWebhook({
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
             * The name of the webhook.
             */
            name?: string;
            /**
             * Method used in the webhook.
             */
            method?: string;
            /**
             * The url of the webhook.
             */
            url?: string;
            /**
             * The status of the webhook.
             */
            status?: string;
            /**
             * If yes, send the content of what was done
             */
            data?: boolean;
            /**
             * The actions that triggers this webhook.
             */
            actions?: any;
            /**
             * The collections that triggers this webhook.
             */
            'system-collections'?: any;
        },
    }): CancelablePromise<{
        data?: Roles;
    }> {
        return __request({
            method: 'PATCH',
            path: `/webhooks/${id}`,
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
     * Delete a Webhook
     * Delete an existing webhook
     * @returns any Successful request
     * @throws ApiError
     */
    public static deleteWebhook({
        id,
    }: {
        /** Unique identifier for the object. **/
        id: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/webhooks/${id}`,
            errors: {
                401: `Error: Unauthorized request`,
                404: `Error: Not found.`,
            },
        });
    }

}