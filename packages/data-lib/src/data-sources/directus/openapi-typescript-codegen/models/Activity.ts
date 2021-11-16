/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collections } from './Collections';
import type { Revisions } from './Revisions';
import type { Users } from './Users';

export type Activity = {
    /**
     * Unique identifier for the object.
     */
    id?: number;
    /**
     * Action that was performed.
     */
    action?: Activity.action;
    /**
     * The user who performed this action.
     */
    user?: (string | Users) | null;
    /**
     * When the action happened.
     */
    timestamp?: string;
    /**
     * The IP address of the user at the time the action took place.
     */
    ip?: string;
    /**
     * User agent string of the browser the user used when the action took place.
     */
    user_agent?: string;
    /**
     * Collection identifier in which the item resides.
     */
    collection?: (string | Collections);
    /**
     * Unique identifier for the item the action applied to. This is always a string, even for integer primary keys.
     */
    item?: string;
    /**
     * User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.
     */
    comment?: string | null;
    revisions?: Array<(number | Revisions)>;
}

export namespace Activity {

    /**
     * Action that was performed.
     */
    export enum action {
        CREATE = 'create',
        UPDATE = 'update',
        DELETE = 'delete',
        LOGIN = 'login',
    }


}
