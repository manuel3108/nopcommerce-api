/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerOrderDetailsModelDto } from './CustomerOrderDetailsModelDto';
import type { RecurringOrderModelDto } from './RecurringOrderModelDto';

export type CustomerOrderListModelDto = {
    orders?: Array<CustomerOrderDetailsModelDto> | null;
    recurring_orders?: Array<RecurringOrderModelDto> | null;
    recurring_payment_errors?: Array<string> | null;
    custom_properties?: Record<string, any> | null;
}