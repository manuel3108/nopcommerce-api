/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GiftCardDto } from './GiftCardDto';
import type { TaxRateDto } from './TaxRateDto';

export type OrderTotalsModelDto = {
    is_editable?: boolean;
    sub_total?: string | null;
    sub_total_discount?: string | null;
    shipping?: string | null;
    requires_shipping?: boolean;
    selected_shipping_method?: string | null;
    hide_shipping_total?: boolean;
    payment_method_additional_fee?: string | null;
    tax?: string | null;
    tax_rates?: Array<TaxRateDto> | null;
    display_tax?: boolean;
    display_tax_rates?: boolean;
    gift_cards?: Array<GiftCardDto> | null;
    order_total_discount?: string | null;
    redeemed_reward_points?: number;
    redeemed_reward_points_amount?: string | null;
    will_earn_reward_points?: number;
    order_total?: string | null;
    custom_properties?: Record<string, any> | null;
}