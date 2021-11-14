/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutAttributeDto } from './CheckoutAttributeDto';
import type { CheckoutAttributeValueDto } from './CheckoutAttributeValueDto';

export type ParseCheckoutAttributeValuesResponse = {
    attribute?: CheckoutAttributeDto;
    values?: Array<CheckoutAttributeValueDto> | null;
}