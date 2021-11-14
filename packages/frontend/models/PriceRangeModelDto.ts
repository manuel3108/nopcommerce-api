/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a price range model
 */
export type PriceRangeModelDto = {
    /**
     * Gets or sets the "from" price
     */
    from?: number | null;
    /**
     * Gets or sets the "to" price
     */
    to?: number | null;
    custom_properties?: Record<string, any> | null;
}