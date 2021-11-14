/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductDetailsAttributeChangeResponse = {
    product_id?: number;
    gtin?: string | null;
    mpn?: string | null;
    sku?: string | null;
    price?: string | null;
    base_price_pangv?: string | null;
    stock_availability?: string | null;
    enabledattributemappingids?: Array<number> | null;
    disabledattributemappingids?: Array<number> | null;
    picture_full_size_url?: string | null;
    picture_default_size_url?: string | null;
    is_free_shipping?: boolean;
    message?: Array<string> | null;
}