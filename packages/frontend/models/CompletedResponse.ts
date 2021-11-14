/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutCompletedModelDto } from './CheckoutCompletedModelDto';

export type CompletedResponse = {
    model?: CheckoutCompletedModelDto;
    redirect_to_method?: string | null;
    id?: number | null;
}