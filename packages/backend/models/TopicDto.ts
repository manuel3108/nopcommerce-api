/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a topic
 */
export type TopicDto = {
    /**
     * Gets or sets the name
     */
    system_name?: string | null;
    /**
     * Gets or sets the value indicating whether this topic should be included in sitemap
     */
    include_in_sitemap?: boolean;
    /**
     * Gets or sets the value indicating whether this topic should be included in top menu
     */
    include_in_top_menu?: boolean;
    /**
     * Gets or sets the value indicating whether this topic should be included in footer (column 1)
     */
    include_in_footer_column1?: boolean;
    /**
     * Gets or sets the value indicating whether this topic should be included in footer (column 1)
     */
    include_in_footer_column2?: boolean;
    /**
     * Gets or sets the value indicating whether this topic should be included in footer (column 1)
     */
    include_in_footer_column3?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the value indicating whether this topic is accessible when a store is closed
     */
    accessible_when_store_closed?: boolean;
    /**
     * Gets or sets the value indicating whether this topic is password protected
     */
    is_password_protected?: boolean;
    /**
     * Gets or sets the password
     */
    password?: string | null;
    /**
     * Gets or sets the title
     */
    title?: string | null;
    /**
     * Gets or sets the body
     */
    body?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets a value of used topic template identifier
     */
    topic_template_id?: number;
    /**
     * Gets or sets the meta keywords
     */
    meta_keywords?: string | null;
    /**
     * Gets or sets the meta description
     */
    meta_description?: string | null;
    /**
     * Gets or sets the meta title
     */
    meta_title?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is subject to ACL
     */
    subject_to_acl?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    id?: number;
}