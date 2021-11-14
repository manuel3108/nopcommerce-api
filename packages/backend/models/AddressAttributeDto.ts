/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an address attribute
 */
export type AddressAttributeDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets a value indicating whether the attribute is required
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
    id?: number;
}