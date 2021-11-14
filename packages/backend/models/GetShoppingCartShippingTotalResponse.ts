/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type GetShoppingCartShippingTotalResponse = {
    /**
     * Shipping total
     */
    shipping_total?: number | null;
    /**
     * Applied tax rate
     */
    tax_rate?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
}