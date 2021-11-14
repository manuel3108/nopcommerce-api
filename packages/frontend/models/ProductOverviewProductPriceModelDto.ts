/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductOverviewProductPriceModelDto = {
    old_price?: string | null;
    price?: string | null;
    price_value?: number;
    /**
     * PAngV base price (used in Germany)
     */
    base_price_p_ang_v?: string | null;
    disable_buy_button?: boolean;
    disable_wishlist_button?: boolean;
    disable_add_to_compare_list_button?: boolean;
    available_for_pre_order?: boolean;
    pre_order_availability_start_date_time_utc?: string | null;
    is_rental?: boolean;
    force_redirection_after_adding_to_cart?: boolean;
    /**
     * A value indicating whether we should display tax/shipping info (used in Germany)
     */
    display_tax_shipping_info?: boolean;
    custom_properties?: Record<string, any> | null;
}