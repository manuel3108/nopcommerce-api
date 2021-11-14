/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductPriceModelDto = {
    /**
     * The currency (in 3-letter ISO 4217 format) of the offer price
     */
    currency_code?: string | null;
    old_price?: string | null;
    price?: string | null;
    price_with_discount?: string | null;
    price_value?: number;
    customer_enters_price?: boolean;
    call_for_price?: boolean;
    product_id?: number;
    hide_prices?: boolean;
    /**
     * rental
     */
    is_rental?: boolean;
    rental_price?: string | null;
    /**
     * A value indicating whether we should display tax/shipping info (used in Germany)
     */
    display_tax_shipping_info?: boolean;
    /**
     * PAngV baseprice (used in Germany)
     */
    base_price_p_ang_v?: string | null;
    custom_properties?: Record<string, any> | null;
}