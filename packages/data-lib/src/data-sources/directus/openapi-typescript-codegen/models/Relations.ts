/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Relations = {
    /**
     * Unique identifier for the relation.
     */
    id?: number;
    /**
     * Collection that has the field that holds the foreign key.
     */
    many_collection?: string;
    /**
     * Foreign key. Field that holds the primary key of the related collection.
     */
    many_field?: string;
    /**
     * Collection on the _one_ side of the relationship.
     */
    one_collection?: string;
    /**
     * Alias column that serves as the _one_ side of the relationship.
     */
    one_field?: string | null;
    one_collection_field?: string | null;
    one_allowed_collections?: Array<string> | null;
    /**
     * Field on the junction table that holds the many field of the related relation.
     */
    junction_field?: string | null;
    sort_field?: string | null;
    one_deselect_action?: string;
}
