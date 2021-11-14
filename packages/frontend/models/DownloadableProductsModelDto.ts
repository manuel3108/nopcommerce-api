/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DownloadableProductsModelDto = {
    order_item_guid?: string;
    order_id?: number;
    custom_order_number?: string | null;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    product_attributes?: string | null;
    download_id?: number;
    license_id?: number;
    created_on?: string;
    custom_properties?: Record<string, any> | null;
}