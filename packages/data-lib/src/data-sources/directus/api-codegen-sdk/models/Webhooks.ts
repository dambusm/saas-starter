/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webhooks = {
    /**
     * The index of the webhook.
     */
    id?: number;
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
    url?: string | null;
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
    actions?: Array<string> | null;
    collections?: Array<string>;
    headers?: Array<string> | null;
    triggers_divider?: string;
}
