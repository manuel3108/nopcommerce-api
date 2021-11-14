/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GiftCardDto = {
    /**
     * Gets or sets the associated order item identifier
     */
    purchased_with_order_item_id?: number | null;
    /**
     * Gets or sets the gift card type identifier
     */
    gift_card_type_id?: number;
    /**
     * Gets or sets the amount
     */
    amount?: number;
    /**
     * Gets or sets a value indicating whether gift card is activated
     */
    is_gift_card_activated?: boolean;
    /**
     * Gets or sets a gift card coupon code
     */
    gift_card_coupon_code?: string | null;
    /**
     * Gets or sets a recipient name
     */
    recipient_name?: string | null;
    /**
     * Gets or sets a recipient email
     */
    recipient_email?: string | null;
    /**
     * Gets or sets a sender name
     */
    sender_name?: string | null;
    /**
     * Gets or sets a sender email
     */
    sender_email?: string | null;
    /**
     * Gets or sets a message
     */
    message?: string | null;
    /**
     * Gets or sets a value indicating whether recipient is notified
     */
    is_recipient_notified?: boolean;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}