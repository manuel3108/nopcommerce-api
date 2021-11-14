/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShipmentItemModelDto = {
    sku?: string | null;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    attribute_info?: string | null;
    rental_info?: string | null;
    quantity_ordered?: number;
    quantity_shipped?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}