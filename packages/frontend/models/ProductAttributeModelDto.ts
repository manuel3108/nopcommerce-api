/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductAttributeModelDto = {
    /**
     * Gets or sets the value IDs of the attribute
     */
    value_ids?: Array<number> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}