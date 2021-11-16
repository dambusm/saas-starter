/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collections } from './Collections';
import type { Roles } from './Roles';
import type { Users } from './Users';

export type Presets = {
    /**
     * Unique identifier for this single collection preset.
     */
    id?: number;
    /**
     * Name for the bookmark. If this is set, the preset will be considered a bookmark.
     */
    bookmark?: string | null;
    /**
     * The unique identifier of the user to whom this collection preset applies.
     */
    user?: (string | Users) | null;
    /**
     * The unique identifier of a role in the platform. If `user` is null, this will be used to apply the collection preset or bookmark for all users in the role.
     */
    role?: (string | Roles) | null;
    /**
     * What collection this collection preset is used for.
     */
    collection?: (string | Collections);
    /**
     * Search query.
     */
    search?: string | null;
    /**
     * Key of the layout that is used.
     */
    layout?: string;
    /**
     * Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.
     */
    layout_query?: any;
    /**
     * Options of the views. The properties in here are controlled by the layout.
     */
    layout_options?: any;
    refresh_interval?: number | null;
    filter?: Array<string> | null;
}
