/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto } from './CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto';

export type CheckoutShippingAddressModelDtoNextStepResponse = {
    update_section_model?: CheckoutShippingAddressModelDtoUpdateSectionJsonModelDto;
    wrong_billing_address?: boolean;
    goto_section?: string | null;
}