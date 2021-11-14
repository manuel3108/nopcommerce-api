/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a blog post
 */
export type BlogPostDto = {
    /**
     * Gets or sets the language identifier
     */
    language_id?: number;
    /**
     * Gets or sets the value indicating whether this blog post should be included in sitemap
     */
    include_in_sitemap?: boolean;
    /**
     * Gets or sets the blog post title
     */
    title?: string | null;
    /**
     * Gets or sets the blog post body
     */
    body?: string | null;
    /**
     * Gets or sets the blog post overview. If specified, then it's used on the blog page instead of the "Body"
     */
    body_overview?: string | null;
    /**
     * Gets or sets a value indicating whether the blog post comments are allowed
     */
    allow_comments?: boolean;
    /**
     * Gets or sets the blog tags
     */
    tags?: string | null;
    /**
     * Gets or sets the blog post start date and time
     */
    start_date_utc?: string | null;
    /**
     * Gets or sets the blog post end date and time
     */
    end_date_utc?: string | null;
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
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    id?: number;
}