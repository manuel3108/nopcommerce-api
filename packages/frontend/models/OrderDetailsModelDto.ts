/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';
import type { OrderDetailsGiftCardDto } from './OrderDetailsGiftCardDto';
import type { OrderDetailsTaxRateDto } from './OrderDetailsTaxRateDto';
import type { OrderItemModelDto } from './OrderItemModelDto';
import type { OrderNoteDto } from './OrderNoteDto';
import type { ShipmentBriefModelDto } from './ShipmentBriefModelDto';

export type OrderDetailsModelDto = {
    print_mode?: boolean;
    pdf_invoice_disabled?: boolean;
    custom_order_number?: string | null;
    created_on?: string;
    order_status?: string | null;
    is_re_order_allowed?: boolean;
    is_return_request_allowed?: boolean;
    is_shippable?: boolean;
    pickup_in_store?: boolean;
    pickup_address?: AddressModelDto;
    shipping_status?: string | null;
    shipping_address?: AddressModelDto;
    shipping_method?: string | null;
    shipments?: Array<ShipmentBriefModelDto> | null;
    billing_address?: AddressModelDto;
    vat_number?: string | null;
    payment_method?: string | null;
    payment_method_status?: string | null;
    can_re_post_process_payment?: boolean;
    custom_values?: Record<string, any> | null;
    order_subtotal?: string | null;
    order_sub_total_discount?: string | null;
    order_shipping?: string | null;
    payment_method_additional_fee?: string | null;
    checkout_attribute_info?: string | null;
    prices_include_tax?: boolean;
    display_tax_shipping_info?: boolean;
    tax?: string | null;
    tax_rates?: Array<OrderDetailsTaxRateDto> | null;
    display_tax?: boolean;
    display_tax_rates?: boolean;
    order_total_discount?: string | null;
    redeemed_reward_points?: number;
    redeemed_reward_points_amount?: string | null;
    order_total?: string | null;
    gift_cards?: Array<OrderDetailsGiftCardDto> | null;
    show_sku?: boolean;
    items?: Array<OrderItemModelDto> | null;
    order_notes?: Array<OrderNoteDto> | null;
    show_vendor_name?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}