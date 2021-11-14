/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecurringOrderModelDto = {
    start_date?: string | null;
    cycle_info?: string | null;
    next_payment?: string | null;
    total_cycles?: number;
    cycles_remaining?: number;
    initial_order_id?: number;
    can_retry_last_payment?: boolean;
    initial_order_number?: string | null;
    can_cancel?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}