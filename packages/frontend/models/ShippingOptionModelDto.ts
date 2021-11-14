/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShippingOptionModelDto = {
    name?: string | null;
    shipping_rate_computation_method_system_name?: string | null;
    description?: string | null;
    price?: string | null;
    rate?: number;
    delivery_date_format?: string | null;
    selected?: boolean;
    custom_properties?: Record<string, any> | null;
}