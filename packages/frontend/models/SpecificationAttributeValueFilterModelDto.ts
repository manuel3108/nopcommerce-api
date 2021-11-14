/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a specification attribute value filter model
 */
export type SpecificationAttributeValueFilterModelDto = {
    /**
     * Gets or sets the specification attribute option name
     */
    name?: string | null;
    /**
     * Gets or sets the specification attribute option color (RGB)
     */
    color_squares_rgb?: string | null;
    /**
     * Gets or sets the value indicating whether the value is selected
     */
    selected?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}