/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a related product
 */
export type RelatedProductDto = {
    /**
     * Gets or sets the first product identifier
     */
    product_id1?: number;
    /**
     * Gets or sets the second product identifier
     */
    product_id2?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}