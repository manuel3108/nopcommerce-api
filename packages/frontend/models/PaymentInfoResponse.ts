/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutConfirmModelDto } from './CheckoutConfirmModelDto';
import type { CheckoutPaymentInfoModelDto } from './CheckoutPaymentInfoModelDto';

export type PaymentInfoResponse = {
    checkout_confirm_model?: CheckoutConfirmModelDto;
    checkout_payment_info_model?: CheckoutPaymentInfoModelDto;
}