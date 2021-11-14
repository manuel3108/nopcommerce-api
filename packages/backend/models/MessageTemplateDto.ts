/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a message template
 */
export type MessageTemplateDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the BCC Email addresses
     */
    bcc_email_addresses?: string | null;
    /**
     * Gets or sets the subject
     */
    subject?: string | null;
    /**
     * Gets or sets the body
     */
    body?: string | null;
    /**
     * Gets or sets a value indicating whether the template is active
     */
    is_active?: boolean;
    /**
     * Gets or sets the delay before sending message
     */
    delay_before_send?: number | null;
    /**
     * Gets or sets the period of message delay
     */
    delay_period_id?: number;
    /**
     * Gets or sets the download identifier of attached file
     */
    attached_download_id?: number;
    /**
     * Gets or sets the used email account identifier
     */
    email_account_id?: number;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    id?: number;
}