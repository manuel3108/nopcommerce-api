/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an email item
 */
export type QueuedEmailDto = {
    /**
     * Gets or sets the priority
     */
    priority_id?: number;
    /**
     * Gets or sets the From property (email address)
     */
    from?: string | null;
    /**
     * Gets or sets the FromName property
     */
    from_name?: string | null;
    /**
     * Gets or sets the To property (email address)
     */
    to?: string | null;
    /**
     * Gets or sets the ToName property
     */
    to_name?: string | null;
    /**
     * Gets or sets the ReplyTo property (email address)
     */
    reply_to?: string | null;
    /**
     * Gets or sets the ReplyToName property
     */
    reply_to_name?: string | null;
    /**
     * Gets or sets the CC
     */
    cc?: string | null;
    /**
     * Gets or sets the BCC
     */
    bcc?: string | null;
    /**
     * Gets or sets the subject
     */
    subject?: string | null;
    /**
     * Gets or sets the body
     */
    body?: string | null;
    /**
     * Gets or sets the attachment file path (full file path)
     */
    attachment_file_path?: string | null;
    /**
     * Gets or sets the attachment file name. If specified, then this file name will be sent to a recipient. Otherwise, "AttachmentFilePath" name will be used.
     */
    attachment_file_name?: string | null;
    /**
     * Gets or sets the download identifier of attached file
     */
    attached_download_id?: number;
    /**
     * Gets or sets the date and time of item creation in UTC
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time in UTC before which this email should not be sent
     */
    dont_send_before_date_utc?: string | null;
    /**
     * Gets or sets the send tries
     */
    sent_tries?: number;
    /**
     * Gets or sets the sent date and time
     */
    sent_on_utc?: string | null;
    /**
     * Gets or sets the used email account identifier
     */
    email_account_id?: number;
    id?: number;
}