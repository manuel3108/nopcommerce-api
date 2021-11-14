/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderItemModelDto = {
    order_item_guid?: string;
    sku?: string | null;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    unit_price?: string | null;
    sub_total?: string | null;
    quantity?: number;
    attribute_info?: string | null;
    rental_info?: string | null;
    vendor_name?: string | null;
    download_id?: number;
    license_id?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}