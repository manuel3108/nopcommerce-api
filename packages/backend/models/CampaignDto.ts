/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a campaign
 */
export type CampaignDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the subject
     */
    subject?: string | null;
    /**
     * Gets or sets the body
     */
    body?: string | null;
    /**
     * Gets or sets the store identifier  which subscribers it will be sent to; set 0 for all newsletter subscribers
     */
    store_id?: number;
    /**
     * Gets or sets the customer role identifier  which subscribers it will be sent to; set 0 for all newsletter subscribers
     */
    customer_role_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time in UTC before which this email should not be sent
     */
    dont_send_before_date_utc?: string | null;
    id?: number;
}