/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a review type
 */
export type ReviewTypeDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the description
     */
    description?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets a value indicating whether the review type is visible to all customers
     */
    visible_to_all_customers?: boolean;
    /**
     * Gets or sets a value indicating whether the review type is required
     */
    is_required?: boolean;
    id?: number;
}