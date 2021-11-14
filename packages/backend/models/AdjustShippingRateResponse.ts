/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';

export type AdjustShippingRateResponse = {
    /**
     * Adjusted shipping rate
     */
    adjusted_shipping_rate?: number;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
}