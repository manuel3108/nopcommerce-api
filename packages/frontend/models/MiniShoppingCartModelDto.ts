/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MiniShoppingCartItemModelDto } from './MiniShoppingCartItemModelDto';

export type MiniShoppingCartModelDto = {
    items?: Array<MiniShoppingCartItemModelDto> | null;
    total_products?: number;
    sub_total?: string | null;
    display_shopping_cart_button?: boolean;
    display_checkout_button?: boolean;
    current_customer_is_guest?: boolean;
    anonymous_checkout_allowed?: boolean;
    show_product_images?: boolean;
    custom_properties?: Record<string, any> | null;
}