/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type GetUnitPriceResponse = {
    /**
     * Unit price
     */
    unit_price?: number;
    /**
     * Applied discount amount
     */
    discount_amount?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
}