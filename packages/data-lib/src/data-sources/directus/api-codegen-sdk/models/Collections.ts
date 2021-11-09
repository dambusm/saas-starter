/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Collections = {
    /**
     * The collection key.
     */
    collection?: string;
    icon?: string | null;
    note?: string | null;
    display_template?: string | null;
    hidden?: boolean;
    singleton?: boolean;
    translations?: Array<string> | null;
    archive_field?: string | null;
    archive_app_filter?: boolean;
    archive_value?: string | null;
    unarchive_value?: string | null;
    sort_field?: string | null;
    accountability?: string | null;
    color?: string | null;
    item_duplication_fields?: Array<string> | null;
    sort?: number | null;
    group?: (string | Collections) | null;
    collapse?: string;
    collection_divider?: string;
    archive_divider?: string;
    sort_divider?: string;
    accountability_divider?: string;
    duplication_divider?: string;
}
