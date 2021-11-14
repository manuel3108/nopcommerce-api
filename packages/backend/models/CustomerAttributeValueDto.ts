/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a customer attribute value
 */
export type CustomerAttributeValueDto = {
    /**
     * Gets or sets the customer attribute identifier
     */
    customer_attribute_id?: number;
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