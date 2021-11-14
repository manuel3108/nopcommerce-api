/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Search term record
 */
export type SearchTermDto = {
    /**
     * Gets or sets the keyword
     */
    keyword?: string | null;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets search count
     */
    count?: number;
    id?: number;
}