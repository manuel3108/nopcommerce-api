/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutAttributeModelDto } from './CheckoutAttributeModelDto';
import type { DiscountBoxModelDto } from './DiscountBoxModelDto';
import type { GiftCardBoxModelDto } from './GiftCardBoxModelDto';
import type { OrderReviewDataModelDto } from './OrderReviewDataModelDto';
import type { ShoppingCartItemModelDto } from './ShoppingCartItemModelDto';

export type ShoppingCartModelDto = {
    one_page_checkout_enabled?: boolean;
    show_sku?: boolean;
    show_product_images?: boolean;
    is_editable?: boolean;
    items?: Array<ShoppingCartItemModelDto> | null;
    checkout_attributes?: Array<CheckoutAttributeModelDto> | null;
    warnings?: Array<string> | null;
    min_order_subtotal_warning?: string | null;
    display_tax_shipping_info?: boolean;
    terms_of_service_on_shopping_cart_page?: boolean;
    terms_of_service_on_order_confirm_page?: boolean;
    terms_of_service_popup?: boolean;
    discount_box?: DiscountBoxModelDto;
    gift_card_box?: GiftCardBoxModelDto;
    order_review_data?: OrderReviewDataModelDto;
    button_payment_method_view_component_names?: Array<string> | null;
    hide_checkout_button?: boolean;
    show_vendor_name?: boolean;
    custom_properties?: Record<string, any> | null;
}