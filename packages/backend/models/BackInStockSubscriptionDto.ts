/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a back in stock subscription
 */
export type BackInStockSubscriptionDto = {
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}