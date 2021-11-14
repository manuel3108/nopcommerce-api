/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an activity log record
 */
export type ActivityLogDto = {
    /**
     * Gets or sets the activity log type identifier
     */
    activity_log_type_id?: number;
    /**
     * Gets or sets the entity identifier
     */
    entity_id?: number | null;
    /**
     * Gets or sets the entity name
     */
    entity_name?: string | null;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the activity comment
     */
    comment?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the IP address
     */
    ip_address?: string | null;
    id?: number;
}