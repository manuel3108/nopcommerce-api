/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';
import type { CheckoutPickupPointsModelDto } from './CheckoutPickupPointsModelDto';

export type CheckoutShippingAddressModelDto = {
    existing_addresses?: Array<AddressModelDto> | null;
    invalid_existing_addresses?: Array<AddressModelDto> | null;
    shipping_new_address?: AddressModelDto;
    new_address_preselected?: boolean;
    display_pickup_in_store?: boolean;
    pickup_points_model?: CheckoutPickupPointsModelDto;
    custom_properties?: Record<string, any> | null;
}