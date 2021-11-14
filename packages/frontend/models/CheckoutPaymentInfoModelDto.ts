/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckoutPaymentInfoModelDto = {
    payment_view_component_name?: string | null;
    /**
     * Used on one-page checkout page
     */
    display_order_totals?: boolean;
    custom_properties?: Record<string, any> | null;
}