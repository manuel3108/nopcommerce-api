/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum topic
 */
export type ForumTopicDto = {
    /**
     * Gets or sets the forum identifier
     */
    forum_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the topic type identifier
     */
    topic_type_id?: number;
    /**
     * Gets or sets the subject
     */
    subject?: string | null;
    /**
     * Gets or sets the number of posts
     */
    num_posts?: number;
    /**
     * Gets or sets the number of views
     */
    views?: number;
    /**
     * Gets or sets the last post identifier
     */
    last_post_id?: number;
    /**
     * Gets or sets the last post customer identifier
     */
    last_post_customer_id?: number;
    /**
     * Gets or sets the last post date and time
     */
    last_post_time?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of instance update
     */
    updated_on_utc?: string;
    id?: number;
}