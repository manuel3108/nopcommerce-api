/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckoutCompletedModelDto = {
    order_id?: number;
    custom_order_number?: string | null;
    one_page_checkout_enabled?: boolean;
    custom_properties?: Record<string, any> | null;
}