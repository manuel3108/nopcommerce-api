/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountInfoModelDto } from './DiscountInfoModelDto';

export type DiscountBoxModelDto = {
    applied_discounts_with_codes?: Array<DiscountInfoModelDto> | null;
    display?: boolean;
    messages?: Array<string> | null;
    is_applied?: boolean;
    custom_properties?: Record<string, any> | null;
}