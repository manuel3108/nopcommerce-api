/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an URL record
 */
export type UrlRecordDto = {
    /**
     * Gets or sets the entity identifier
     */
    entity_id?: number;
    /**
     * Gets or sets the entity name
     */
    entity_name?: string | null;
    /**
     * Gets or sets the slug
     */
    slug?: string | null;
    /**
     * Gets or sets the value indicating whether the record is active
     */
    is_active?: boolean;
    /**
     * Gets or sets the language identifier
     */
    language_id?: number;
    id?: number;
}