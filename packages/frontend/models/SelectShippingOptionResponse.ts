/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderTotalsModelDto } from './OrderTotalsModelDto';

export type SelectShippingOptionResponse = {
    success?: boolean;
    model?: OrderTotalsModelDto;
    errors?: Array<string> | null;
}