/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a state province
 */
export type StateProvinceDto = {
    /**
     * Gets or sets the country identifier
     */
    country_id?: number;
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the abbreviation
     */
    abbreviation?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}