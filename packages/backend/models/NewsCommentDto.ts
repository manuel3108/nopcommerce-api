/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a news comment
 */
export type NewsCommentDto = {
    /**
     * Gets or sets the comment title
     */
    comment_title?: string | null;
    /**
     * Gets or sets the comment text
     */
    comment_text?: string | null;
    /**
     * Gets or sets the news item identifier
     */
    news_item_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets a value indicating whether the comment is approved
     */
    is_approved?: boolean;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}