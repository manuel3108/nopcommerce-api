/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressModelDto } from './AddressModelDto';

export type CustomerAddressEditModelDto = {
    address?: AddressModelDto;
    custom_properties?: Record<string, any> | null;
}