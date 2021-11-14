/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PrivateMessageModelDto = {
    from_customer_id?: number;
    customer_from_name?: string | null;
    allow_viewing_from_profile?: boolean;
    to_customer_id?: number;
    customer_to_name?: string | null;
    allow_viewing_to_profile?: boolean;
    subject?: string | null;
    message?: string | null;
    created_on?: string;
    is_read?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}