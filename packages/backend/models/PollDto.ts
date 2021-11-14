/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a poll
 */
export type PollDto = {
    /**
     * Gets or sets the language identifier
     */
    language_id?: number;
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the system keyword
     */
    system_keyword?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets a value indicating whether the entity should be shown on home page
     */
    show_on_homepage?: boolean;
    /**
     * Gets or sets a value indicating whether the anonymous votes are allowed
     */
    allow_guests_to_vote?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets the poll start date and time
     */
    start_date_utc?: string | null;
    /**
     * Gets or sets the poll end date and time
     */
    end_date_utc?: string | null;
    id?: number;
}