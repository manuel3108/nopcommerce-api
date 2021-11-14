/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product attribute mapping
 */
export type ProductAttributeMappingDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the product attribute identifier
     */
    product_attribute_id?: number;
    /**
     * Gets or sets a value a text prompt
     */
    text_prompt?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is required
     */
    is_required?: boolean;
    /**
     * Gets or sets the attribute control type identifier
     */
    attribute_control_type_id?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
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
 * Leave empty (or null) to enable this attribute.
 * Conditional attributes that only appear if a previous attribute is selected, such as having an option
 * for personalizing clothing with a name and only providing the text input box if the "Personalize" radio button is checked.
     */
    condition_attribute_xml?: string | null;
    id?: number;
}