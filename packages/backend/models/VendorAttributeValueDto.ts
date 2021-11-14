/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a vendor attribute value
 */
export type VendorAttributeValueDto = {
    /**
     * Gets or sets the name
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
    /**
     * Gets or sets the vendor attribute identifier
     */
    vendor_attribute_id?: number;
    id?: number;
}