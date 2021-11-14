/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppliedGiftCardResponseDto } from './AppliedGiftCardResponseDto';
import type { DiscountDto } from './DiscountDto';

export type GetShoppingCartTotalResponse = {
    /**
     * Shopping cart total (Null if shopping cart total couldn't be calculated now)
     */
    shopping_cart_total?: number | null;
    /**
     * Discount amount
     */
    redeemed_reward_points_amount?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
    /**
     * Applied gift cards
     */
    applied_gift_cards?: Array<AppliedGiftCardResponseDto> | null;
    /**
     * Reward points to redeem
     */
    redeemed_reward_points?: number;
    /**
     * Reward points amount in primary store currency to redeem
     */
    discount_amount?: number;
}