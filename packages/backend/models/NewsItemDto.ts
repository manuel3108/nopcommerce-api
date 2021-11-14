/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a news item
 */
export type NewsItemDto = {
    /**
     * Gets or sets the language identifier
     */
    language_id?: number;
    /**
     * Gets or sets the news title
     */
    title?: string | null;
    /**
     * Gets or sets the short text
     */
    short?: string | null;
    /**
     * Gets or sets the full text
     */
    full?: string | null;
    /**
     * Gets or sets a value indicating whether the news item is published
     */
    published?: boolean;
    /**
     * Gets or sets the news item start date and time
     */
    start_date_utc?: string | null;
    /**
     * Gets or sets the news item end date and time
     */
    end_date_utc?: string | null;
    /**
     * Gets or sets a value indicating whether the news post comments are allowed
     */
    allow_comments?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
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
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    id?: number;
}