/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product specification attribute
 */
export type ProductSpecificationAttributeDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the attribute type ID
     */
    attribute_type_id?: number;
    /**
     * Gets or sets the specification attribute identifier
     */
    specification_attribute_option_id?: number;
    /**
     * Gets or sets the custom value
     */
    custom_value?: string | null;
    /**
     * Gets or sets whether the attribute can be filtered by
     */
    allow_filtering?: boolean;
    /**
     * Gets or sets whether the attribute will be shown on the product page
     */
    show_on_product_page?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}