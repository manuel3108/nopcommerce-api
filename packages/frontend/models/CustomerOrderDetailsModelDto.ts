/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerOrderDetailsModelDto = {
    custom_order_number?: string | null;
    order_total?: string | null;
    is_return_request_allowed?: boolean;
    order_status_enum?: number;
    order_status?: string | null;
    payment_status?: string | null;
    shipping_status?: string | null;
    created_on?: string;
    id?: number;
    custom_properties?: Record<string, any> | null;
}