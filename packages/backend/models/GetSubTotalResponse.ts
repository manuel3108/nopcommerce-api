/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type GetSubTotalResponse = {
    /**
     * Sub total
     */
    sub_total?: number;
    /**
     * Applied discount amount
     */
    discount_amount?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
    /**
     * Maximum discounted qty
     */
    maximum_discount_qty?: number | null;
}