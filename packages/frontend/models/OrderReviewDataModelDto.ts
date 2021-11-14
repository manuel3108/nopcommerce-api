/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';

export type OrderReviewDataModelDto = {
    display?: boolean;
    billing_address?: AddressModelDto;
    is_shippable?: boolean;
    shipping_address?: AddressModelDto;
    selected_pickup_in_store?: boolean;
    pickup_address?: AddressModelDto;
    shipping_method?: string | null;
    payment_method?: string | null;
    custom_values?: Record<string, any> | null;
    custom_properties?: Record<string, any> | null;
}