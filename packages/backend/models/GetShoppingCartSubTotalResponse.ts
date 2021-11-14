/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type GetShoppingCartSubTotalResponse = {
    /**
     * Applied discount amount
     */
    discount_amount?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
    /**
     * Sub total (without discount)
     */
    sub_total_without_discount?: number;
    /**
     * Sub total (with discount)
     */
    sub_total_with_discount?: number;
    /**
     * Tax rates (of order sub total)
     */
    tax_rates?: Record<string, number> | null;
}