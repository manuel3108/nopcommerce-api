/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a specification attribute option
 */
export type SpecificationAttributeOptionDto = {
    /**
     * Gets or sets the specification attribute identifier
     */
    specification_attribute_id?: number;
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the color RGB value (used when you want to display "Color squares" instead of text)
     */
    color_squares_rgb?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}