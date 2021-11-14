/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a tier price
 */
export type TierPriceDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the store identifier (0 - all stores)
     */
    store_id?: number;
    /**
     * Gets or sets the customer role identifier
     */
    customer_role_id?: number | null;
    /**
     * Gets or sets the quantity
     */
    quantity?: number;
    /**
     * Gets or sets the price
     */
    price?: number;
    /**
     * Gets or sets the start date and time in UTC
     */
    start_date_time_utc?: string | null;
    /**
     * Gets or sets the end date and time in UTC
     */
    end_date_time_utc?: string | null;
    id?: number;
}