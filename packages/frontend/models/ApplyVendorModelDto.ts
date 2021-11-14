/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VendorAttributeModelDto } from './VendorAttributeModelDto';

export type ApplyVendorModelDto = {
    name?: string | null;
    email?: string | null;
    description?: string | null;
    vendor_attributes?: Array<VendorAttributeModelDto> | null;
    display_captcha?: boolean;
    terms_of_service_enabled?: boolean;
    terms_of_service_popup?: boolean;
    disable_form_input?: boolean;
    result?: string | null;
    custom_properties?: Record<string, any> | null;
}