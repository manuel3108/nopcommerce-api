/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutPickupPointsModelDto } from './CheckoutPickupPointsModelDto';
import type { ShippingMethodModelDto } from './ShippingMethodModelDto';

export type CheckoutShippingMethodModelDto = {
    shipping_methods?: Array<ShippingMethodModelDto> | null;
    notify_customer_about_shipping_from_multiple_locations?: boolean;
    warnings?: Array<string> | null;
    display_pickup_in_store?: boolean;
    pickup_points_model?: CheckoutPickupPointsModelDto;
    custom_properties?: Record<string, any> | null;
}