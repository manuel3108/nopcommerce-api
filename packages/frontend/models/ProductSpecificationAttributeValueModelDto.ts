/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductSpecificationAttributeValueModelDto = {
    /**
     * Gets or sets the attribute type id
     */
    attribute_type_id?: number;
    /**
     * Gets or sets the value raw. This value is already HTML encoded
     */
    value_raw?: string | null;
    /**
     * Gets or sets the option color (if specified). Used to display color squares
     */
    color_squares_rgb?: string | null;
    custom_properties?: Record<string, any> | null;
}