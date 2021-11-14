/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerAddressEditModelDto } from './CustomerAddressEditModelDto';

export type AddressEditResponse = {
    model?: CustomerAddressEditModelDto;
    errors?: Array<string> | null;
}