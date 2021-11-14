/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReturnRequestModelDto } from './ReturnRequestModelDto';

export type CustomerReturnRequestsModelDto = {
    items?: Array<ReturnRequestModelDto> | null;
    custom_properties?: Record<string, any> | null;
}