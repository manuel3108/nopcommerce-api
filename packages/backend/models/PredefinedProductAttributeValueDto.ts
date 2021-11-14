/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a predefined (default) product attribute value
 */
export type PredefinedProductAttributeValueDto = {
    /**
     * Gets or sets the product attribute identifier
     */
    product_attribute_id?: number;
    /**
     * Gets or sets the product attribute name
     */
    name?: string | null;
    /**
     * Gets or sets the price adjustment
     */
    price_adjustment?: number;
    /**
     * Gets or sets a value indicating whether "price adjustment" is specified as percentage
     */
    price_adjustment_use_percentage?: boolean;
    /**
     * Gets or sets the weight adjustment
     */
    weight_adjustment?: number;
    /**
     * Gets or sets the attribute value cost
     */
    cost?: number;
    /**
     * Gets or sets a value indicating whether the value is pre-selected
     */
    is_pre_selected?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}