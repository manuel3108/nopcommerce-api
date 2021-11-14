/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type FinalPriceResponse = {
    price_without_discounts?: number;
    final_price?: number;
    applied_discount_amount?: number;
    applied_discounts?: Array<DiscountDto> | null;
}