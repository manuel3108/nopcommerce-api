/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';

export type CustomerAddressListModelDto = {
    addresses?: Array<AddressModelDto> | null;
    custom_properties?: Record<string, any> | null;
}