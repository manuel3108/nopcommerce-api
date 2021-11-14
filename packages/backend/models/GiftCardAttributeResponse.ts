/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a gift card attribute
 */
export type GiftCardAttributeResponse = {
    /**
     * Recipient name
     */
    recipient_name?: string | null;
    /**
     * Recipient email
     */
    recipient_email?: string | null;
    /**
     * Sender name
     */
    sender_name?: string | null;
    /**
     * Sender email
     */
    sender_email?: string | null;
    /**
     * Message
     */
    gift_card_message?: string | null;
    id?: number;
}