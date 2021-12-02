/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';
import type { Collections } from './Collections';

export type Revisions = {
    /**
     * Unique identifier for the revision.
     */
    id?: number;
    /**
     * Unique identifier for the activity record.
     */
    activity?: (number | Activity);
    /**
     * Collection of the updated item.
     */
    collection?: (string | Collections);
    /**
     * Primary key of updated item.
     */
    item?: string;
    /**
     * Copy of item state at time of update.
     */
    data?: any;
    /**
     * Changes between the previous and the current revision.
     */
    delta?: any;
    /**
     * If the current item was updated relationally, this is the id of the parent revision record
     */
    parent?: number | null;
}
