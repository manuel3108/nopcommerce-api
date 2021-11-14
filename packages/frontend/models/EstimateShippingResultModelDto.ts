/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShippingOptionModelDto } from './ShippingOptionModelDto';

export type EstimateShippingResultModelDto = {
    shipping_options?: Array<ShippingOptionModelDto> | null;
    success?: boolean;
    errors?: Array<string> | null;
    custom_properties?: Record<string, any> | null;
}