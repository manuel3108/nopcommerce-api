/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum subscription item
 */
export type ForumSubscriptionDto = {
    /**
     * Gets or sets the forum subscription identifier
     */
    subscription_guid?: string;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the forum identifier
     */
    forum_id?: number;
    /**
     * Gets or sets the topic identifier
     */
    topic_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}