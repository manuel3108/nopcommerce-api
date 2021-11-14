/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VendorAttributeModelDto } from './VendorAttributeModelDto';

export type VendorInfoModelDto = {
    name?: string | null;
    email?: string | null;
    description?: string | null;
    picture_url?: string | null;
    vendor_attributes?: Array<VendorAttributeModelDto> | null;
    custom_properties?: Record<string, any> | null;
}