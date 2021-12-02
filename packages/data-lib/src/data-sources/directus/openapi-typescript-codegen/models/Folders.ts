/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Folders = {
    /**
     * Unique identifier for the folder.
     */
    id?: string;
    /**
     * Name of the folder.
     */
    name?: string;
    /**
     * Unique identifier of the parent folder. This allows for nested folders.
     */
    parent?: (string | Folders) | null;
}
