/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelectListItemDto } from './SelectListItemDto';
import type { ShoppingCartType } from './ShoppingCartType';

export type AddToCartModelDto = {
    product_id?: number;
    /**
     * qty
     */
    entered_quantity?: number;
    minimum_quantity_notification?: string | null;
    allowed_quantities?: Array<SelectListItemDto> | null;
    /**
     * price entered by customers
     */
    customer_enters_price?: boolean;
    customer_entered_price?: number;
    customer_entered_price_range?: string | null;
    disable_buy_button?: boolean;
    disable_wishlist_button?: boolean;
    /**
     * rental
     */
    is_rental?: boolean;
    /**
     * pre-order
     */
    available_for_pre_order?: boolean;
    pre_order_availability_start_date_time_utc?: string | null;
    pre_order_availability_start_date_time_user_time?: string | null;
    /**
     * updating existing shopping cart or wishlist item?
     */
    updated_shopping_cart_item_id?: number;
    update_shopping_cart_item_type?: ShoppingCartType;
    custom_properties?: Record<string, any> | null;
}