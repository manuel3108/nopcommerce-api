/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TopicModelDto = {
    /**
     * Gets or sets the name
     */
    system_name?: string | null;
    /**
     * Gets or sets the value indicating whether this topic should be included in sitemap
     */
    include_in_sitemap?: boolean;
    /**
     * Gets or sets the value indicating whether this topic is password protected
     */
    is_password_protected?: boolean;
    /**
     * Gets or sets the title
     */
    title?: string | null;
    /**
     * Gets or sets the body
     */
    body?: string | null;
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
     * Gets or sets the SeName
     */
    se_name?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}