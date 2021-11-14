/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a checkout attribute value
 */
export type CheckoutAttributeValueDto = {
    /**
     * Gets or sets the checkout attribute mapping identifier
     */
    checkout_attribute_id?: number;
    /**
     * Gets or sets the checkout attribute name
     */
    name?: string | null;
    /**
     * Gets or sets the color RGB value (used with "Color squares" attribute type)
     */
    color_squares_rgb?: string | null;
    /**
     * Gets or sets the price adjustment
     */
    price_adjustment?: number;
    /**
     * Gets or sets the weight adjustment
     */
    weight_adjustment?: number;
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