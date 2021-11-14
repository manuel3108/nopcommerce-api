/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutConfirmModelDto } from './CheckoutConfirmModelDto';

export type ConfirmOrderResponse = {
    model?: CheckoutConfirmModelDto;
    redirect_to_method?: string | null;
    id?: number | null;
}