/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product category mapping
 */
export type ProductCategoryDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the category identifier
     */
    category_id?: number;
    /**
     * Gets or sets a value indicating whether the product is featured
     */
    is_featured_product?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}