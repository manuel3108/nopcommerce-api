/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckoutConfirmModelDto = {
    terms_of_service_on_order_confirm_page?: boolean;
    terms_of_service_popup?: boolean;
    min_order_total_warning?: string | null;
    warnings?: Array<string> | null;
    custom_properties?: Record<string, any> | null;
}