/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum post
 */
export type ForumPostDto = {
    /**
     * Gets or sets the forum topic identifier
     */
    topic_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the text
     */
    text?: string | null;
    /**
     * Gets or sets the IP address
     */
    ip_address?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of instance update
     */
    updated_on_utc?: string;
    /**
     * Gets or sets the count of votes
     */
    vote_count?: number;
    id?: number;
}