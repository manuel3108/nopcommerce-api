/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a checkout attribute
 */
export type CheckoutAttributeDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the text prompt
     */
    text_prompt?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is required
     */
    is_required?: boolean;
    /**
     * Gets or sets a value indicating whether shippable products are required in order to display this attribute
     */
    shippable_product_required?: boolean;
    /**
     * Gets or sets a value indicating whether the attribute is marked as tax exempt
     */
    is_tax_exempt?: boolean;
    /**
     * Gets or sets the tax category identifier
     */
    tax_category_id?: number;
    /**
     * Gets or sets the attribute control type identifier
     */
    attribute_control_type_id?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets the validation rule for minimum length (for textbox and multiline textbox)
     */
    validation_min_length?: number | null;
    /**
     * Gets or sets the validation rule for maximum length (for textbox and multiline textbox)
     */
    validation_max_length?: number | null;
    /**
     * Gets or sets the validation rule for file allowed extensions (for file upload)
     */
    validation_file_allowed_extensions?: string | null;
    /**
     * Gets or sets the validation rule for file maximum size in kilobytes (for file upload)
     */
    validation_file_maximum_size?: number | null;
    /**
     * Gets or sets the default value (for textbox and multiline textbox)
     */
    default_value?: string | null;
    /**
     * Gets or sets a condition (depending on other attribute) when this attribute should be enabled (visible).
     */
    condition_attribute_xml?: string | null;
    id?: number;
}