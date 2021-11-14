/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutAttributeValueModelDto } from './CheckoutAttributeValueModelDto';

export type CheckoutAttributeModelDto = {
    name?: string | null;
    default_value?: string | null;
    text_prompt?: string | null;
    is_required?: boolean;
    selected_day?: number | null;
    selected_month?: number | null;
    selected_year?: number | null;
    allowed_file_extensions?: Array<string> | null;
    attribute_control_type?: number;
    values?: Array<CheckoutAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}