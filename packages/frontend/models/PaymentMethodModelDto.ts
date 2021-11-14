/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentMethodModelDto = {
    payment_method_system_name?: string | null;
    name?: string | null;
    description?: string | null;
    fee?: string | null;
    selected?: boolean;
    logo_url?: string | null;
    custom_properties?: Record<string, any> | null;
}