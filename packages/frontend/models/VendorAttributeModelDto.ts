/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VendorAttributeValueModelDto } from './VendorAttributeValueModelDto';

export type VendorAttributeModelDto = {
    name?: string | null;
    is_required?: boolean;
    default_value?: string | null;
    attribute_control_type?: number;
    values?: Array<VendorAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}