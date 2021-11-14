/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product manufacturer mapping
 */
export type ProductManufacturerDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the manufacturer identifier
     */
    manufacturer_id?: number;
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