/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShippingOptionDto } from './ShippingOptionDto';

export type ShippingMethodModelDto = {
    shipping_rate_computation_method_system_name?: string | null;
    name?: string | null;
    description?: string | null;
    fee?: string | null;
    selected?: boolean;
    shipping_option?: ShippingOptionDto;
    custom_properties?: Record<string, any> | null;
}