/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a specification attribute
 */
export type SpecificationAttributeDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the specification attribute group identifier
     */
    specification_attribute_group_id?: number | null;
    id?: number;
}