/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutBillingAddressModelDto } from './CheckoutBillingAddressModelDto';

export type NewBillingAddressResponse = {
    model?: CheckoutBillingAddressModelDto;
    redirect_to_method?: string | null;
    id?: number | null;
}