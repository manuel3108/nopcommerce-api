/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTotalsModelDto } from './OrderTotalsModelDto';

export type CheckoutAttributeChangeResponse = {
    order_totals_model?: OrderTotalsModelDto;
    formatted_attributes?: string | null;
    enabled_attribute_ids?: Array<number> | null;
    disabled_attribute_ids?: Array<number> | null;
}