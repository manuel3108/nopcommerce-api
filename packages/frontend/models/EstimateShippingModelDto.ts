/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelectListItemDto } from './SelectListItemDto';

export type EstimateShippingModelDto = {
    request_delay?: number;
    enabled?: boolean;
    country_id?: number | null;
    state_province_id?: number | null;
    zip_postal_code?: string | null;
    use_city?: boolean;
    city?: string | null;
    available_countries?: Array<SelectListItemDto> | null;
    available_states?: Array<SelectListItemDto> | null;
    custom_properties?: Record<string, any> | null;
}