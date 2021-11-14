/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a generic attribute
 */
export type GenericAttributeDto = {
    /**
     * Gets or sets the entity identifier
     */
    entity_id?: number;
    /**
     * Gets or sets the key group
     */
    key_group?: string | null;
    /**
     * Gets or sets the key
     */
    key?: string | null;
    /**
     * Gets or sets the value
     */
    value?: string | null;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the created or updated date
     */
    created_or_updated_date_utc?: string | null;
    id?: number;
}