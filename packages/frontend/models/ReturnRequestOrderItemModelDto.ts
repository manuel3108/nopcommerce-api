/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReturnRequestOrderItemModelDto = {
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    attribute_info?: string | null;
    unit_price?: string | null;
    quantity?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}