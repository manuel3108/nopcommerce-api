/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShoppingCartItemModel } from './ShoppingCartItemModel';

export type WishlistModelDto = {
    customer_guid?: string;
    customer_fullname?: string | null;
    email_wishlist_enabled?: boolean;
    show_sku?: boolean;
    show_product_images?: boolean;
    is_editable?: boolean;
    display_add_to_cart?: boolean;
    display_tax_shipping_info?: boolean;
    items?: Array<ShoppingCartItemModel> | null;
    warnings?: Array<string> | null;
    custom_properties?: Record<string, any> | null;
}