/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductAttributeValueModelDto } from './ProductAttributeValueModelDto';

export type ProductDetailsAttributeModelDto = {
    product_id?: number;
    product_attribute_id?: number;
    name?: string | null;
    description?: string | null;
    text_prompt?: string | null;
    is_required?: boolean;
    /**
     * Default value for textboxes
     */
    default_value?: string | null;
    /**
     * Selected day value for datepicker
     */
    selected_day?: number | null;
    /**
     * Selected month value for datepicker
     */
    selected_month?: number | null;
    /**
     * Selected year value for datepicker
     */
    selected_year?: number | null;
    /**
     * A value indicating whether this attribute depends on some other attribute
     */
    has_condition?: boolean;
    /**
     * Allowed file extensions for customer uploaded files
     */
    allowed_file_extensions?: Array<string> | null;
    attribute_control_type?: number;
    values?: Array<ProductAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}