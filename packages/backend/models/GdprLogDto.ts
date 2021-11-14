/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a GDPR log
 */
export type GdprLogDto = {
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the consent identifier (0 if not related to any consent)
     */
    consent_id?: number;
    /**
     * Gets or sets the customer info (when a customer records is already deleted)
     */
    customer_info?: string | null;
    /**
     * Gets or sets the request type identifier
     */
    request_type_id?: number;
    /**
     * Gets or sets the request details
     */
    request_details?: string | null;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    id?: number;
}