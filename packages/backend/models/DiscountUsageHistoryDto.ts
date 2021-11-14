/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a discount usage history entry
 */
export type DiscountUsageHistoryDto = {
    /**
     * Gets or sets the discount identifier
     */
    discount_id?: number;
    /**
     * Gets or sets the order identifier
     */
    order_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}