/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum post vote
 */
export type ForumPostVoteDto = {
    /**
     * Gets or sets the forum post identifier
     */
    forum_post_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets a value indicating whether this vote is up or is down
     */
    is_up?: boolean;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}