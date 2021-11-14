/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutConfirmModelDtoUpdateSectionJsonModelDto } from './CheckoutConfirmModelDtoUpdateSectionJsonModelDto';

export type CheckoutConfirmModelDtoNextStepResponse = {
    update_section_model?: CheckoutConfirmModelDtoUpdateSectionJsonModelDto;
    wrong_billing_address?: boolean;
    goto_section?: string | null;
}