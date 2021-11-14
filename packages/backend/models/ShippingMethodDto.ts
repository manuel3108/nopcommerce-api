/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a shipping method
 */
export type ShippingMethodDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the description
     */
    description?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}