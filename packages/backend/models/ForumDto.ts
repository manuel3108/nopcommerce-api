/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum
 */
export type ForumDto = {
    /**
     * Gets or sets the forum group identifier
     */
    forum_group_id?: number;
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the description
     */
    description?: string | null;
    /**
     * Gets or sets the number of topics
     */
    num_topics?: number;
    /**
     * Gets or sets the number of posts
     */
    num_posts?: number;
    /**
     * Gets or sets the last topic identifier
     */
    last_topic_id?: number;
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
     * Gets or sets the display order
     */
    display_order?: number;
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