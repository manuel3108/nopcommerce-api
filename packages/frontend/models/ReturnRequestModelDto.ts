/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReturnRequestModelDto = {
    custom_number?: string | null;
    return_request_status?: string | null;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    quantity?: number;
    return_reason?: string | null;
    return_action?: string | null;
    comments?: string | null;
    uploaded_file_guid?: string;
    created_on?: string;
    id?: number;
    custom_properties?: Record<string, any> | null;
}