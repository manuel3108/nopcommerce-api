/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutPickupPointModelDto } from './CheckoutPickupPointModelDto';

export type CheckoutPickupPointsModelDto = {
    warnings?: Array<string> | null;
    pickup_points?: Array<CheckoutPickupPointModelDto> | null;
    allow_pickup_in_store?: boolean;
    pickup_in_store?: boolean;
    pickup_in_store_only?: boolean;
    display_pickup_points_on_map?: boolean;
    google_maps_api_key?: string | null;
    custom_properties?: Record<string, any> | null;
}