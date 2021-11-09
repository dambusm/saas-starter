/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Fields = {
    id?: number;
    /**
     * Unique name of the collection this field is in.
     */
    collection?: string;
    /**
     * Unique name of the field. Field name is unique within the collection.
     */
    field?: string;
    special?: Array<string> | null;
    interface?: string | null;
    options?: Array<string> | null;
    display?: string | null;
    display_options?: Array<string> | null;
    readonly?: boolean;
    hidden?: boolean;
    sort?: number | null;
    width?: string | null;
    translations?: Array<string> | null;
    note?: string | null;
    conditions?: Array<string> | null;
    required?: boolean | null;
    group?: (number | Fields) | null;
}
