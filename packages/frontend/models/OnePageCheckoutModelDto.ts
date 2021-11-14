/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutBillingAddressModelDto } from './CheckoutBillingAddressModelDto';

export type OnePageCheckoutModelDto = {
    shipping_required?: boolean;
    disable_billing_address_checkout_step?: boolean;
    billing_address?: CheckoutBillingAddressModelDto;
    custom_properties?: Record<string, any> | null;
}