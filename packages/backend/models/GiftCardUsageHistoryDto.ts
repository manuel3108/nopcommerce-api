/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a gift card usage history entry
 */
export type GiftCardUsageHistoryDto = {
    /**
     * Gets or sets the gift card identifier
     */
    gift_card_id?: number;
    /**
     * Gets or sets the order identifier
     */
    used_with_order_id?: number;
    /**
     * Gets or sets the used value (amount)
     */
    used_value?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}