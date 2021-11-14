/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContactVendorModelDto = {
    vendor_id?: number;
    vendor_name?: string | null;
    email?: string | null;
    subject?: string | null;
    subject_enabled?: boolean;
    enquiry?: string | null;
    full_name?: string | null;
    successfully_sent?: boolean;
    result?: string | null;
    display_captcha?: boolean;
    custom_properties?: Record<string, any> | null;
}