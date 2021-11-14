/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutShippingMethodModelDto } from './CheckoutShippingMethodModelDto';

export type ShippingMethodResponse = {
    model?: CheckoutShippingMethodModelDto;
    redirect_to_method?: string | null;
    id?: number | null;
}