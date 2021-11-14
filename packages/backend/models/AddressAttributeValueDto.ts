/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an address attribute value
 */
export type AddressAttributeValueDto = {
    /**
     * Gets or sets the address attribute identifier
     */
    address_attribute_id?: number;
    /**
     * Gets or sets the checkout attribute name
     */
    name?: string | null;
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