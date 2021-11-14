/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a private message
 */
export type PrivateMessageDto = {
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the customer identifier who sent the message
     */
    from_customer_id?: number;
    /**
     * Gets or sets the customer identifier who should receive the message
     */
    to_customer_id?: number;
    /**
     * Gets or sets the subject
     */
    subject?: string | null;
    /**
     * Gets or sets the text
     */
    text?: string | null;
    /**
     * Gets or sets a value indicating whether message is read
     */
    is_read?: boolean;
    /**
     * Gets or sets a value indicating whether message is deleted by author
     */
    is_deleted_by_author?: boolean;
    /**
     * Gets or sets a value indicating whether message is deleted by recipient
     */
    is_deleted_by_recipient?: boolean;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}