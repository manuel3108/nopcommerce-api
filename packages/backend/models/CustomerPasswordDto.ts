/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a customer password
 */
export type CustomerPasswordDto = {
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the password
     */
    password?: string | null;
    /**
     * Gets or sets the password format identifier
     */
    password_format_id?: number;
    /**
     * Gets or sets the password salt
     */
    password_salt?: string | null;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    id?: number;
}