/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';

export type CheckoutBillingAddressModelDto = {
    existing_addresses?: Array<AddressModelDto> | null;
    invalid_existing_addresses?: Array<AddressModelDto> | null;
    billing_new_address?: AddressModelDto;
    ship_to_same_address?: boolean;
    ship_to_same_address_allowed?: boolean;
    /**
     * Used on one-page checkout page
     */
    new_address_preselected?: boolean;
    custom_properties?: Record<string, any> | null;
}