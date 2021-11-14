/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product review
 */
export type ProductReviewDto = {
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets a value indicating whether the content is approved
     */
    is_approved?: boolean;
    /**
     * Gets or sets the title
     */
    title?: string | null;
    /**
     * Gets or sets the review text
     */
    review_text?: string | null;
    /**
     * Gets or sets the reply text
     */
    reply_text?: string | null;
    /**
     * Gets or sets the value indicating whether the customer is already notified of the reply to review
     */
    customer_notified_of_reply?: boolean;
    /**
     * Review rating
     */
    rating?: number;
    /**
     * Review helpful votes total
     */
    helpful_yes_total?: number;
    /**
     * Review not helpful votes total
     */
    helpful_no_total?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}