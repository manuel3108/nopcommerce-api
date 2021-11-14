/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutShippingAddressModelDto } from './CheckoutShippingAddressModelDto';

export type ShippingAddressResponse = {
    model?: CheckoutShippingAddressModelDto;
    redirect_to_method?: string | null;
    id?: number | null;
}