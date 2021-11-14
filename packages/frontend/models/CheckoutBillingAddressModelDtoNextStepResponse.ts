/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutBillingAddressModelDtoUpdateSectionJsonModelDto } from './CheckoutBillingAddressModelDtoUpdateSectionJsonModelDto';

export type CheckoutBillingAddressModelDtoNextStepResponse = {
    update_section_model?: CheckoutBillingAddressModelDtoUpdateSectionJsonModelDto;
    wrong_billing_address?: boolean;
    goto_section?: string | null;
}