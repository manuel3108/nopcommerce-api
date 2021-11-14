/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product attribute value
 */
export type ProductAttributeValueDto = {
    /**
     * Gets or sets the product attribute mapping identifier
     */
    product_attribute_mapping_id?: number;
    /**
     * Gets or sets the attribute value type identifier
     */
    attribute_value_type_id?: number;
    /**
     * Gets or sets the associated product identifier (used only with AttributeValueType.AssociatedToProduct)
     */
    associated_product_id?: number;
    /**
     * Gets or sets the product attribute name
     */
    name?: string | null;
    /**
     * Gets or sets the color RGB value (used with "Color squares" attribute type)
     */
    color_squares_rgb?: string | null;
    /**
     * Gets or sets the picture ID for image square (used with "Image squares" attribute type)
     */
    image_squares_picture_id?: number;
    /**
     * Gets or sets the price adjustment (used only with AttributeValueType.Simple)
     */
    price_adjustment?: number;
    /**
     * Gets or sets a value indicating whether "price adjustment" is specified as percentage (used only with AttributeValueType.Simple)
     */
    price_adjustment_use_percentage?: boolean;
    /**
     * Gets or sets the weight adjustment (used only with AttributeValueType.Simple)
     */
    weight_adjustment?: number;
    /**
     * Gets or sets the attribute value cost (used only with AttributeValueType.Simple)
     */
    cost?: number;
    /**
     * Gets or sets a value indicating whether the customer can enter the quantity of associated product (used only with AttributeValueType.AssociatedToProduct)
     */
    customer_enters_qty?: boolean;
    /**
     * Gets or sets the quantity of associated product (used only with AttributeValueType.AssociatedToProduct)
     */
    quantity?: number;
    /**
     * Gets or sets a value indicating whether the value is pre-selected
     */
    is_pre_selected?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the picture (identifier) associated with this value. This picture should replace a product main picture once clicked (selected).
     */
    picture_id?: number;
    id?: number;
}