/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressAttributeModelDto } from './AddressAttributeModelDto';
import type { SelectListItemDto } from './SelectListItemDto';

export type AddressModelDto = {
    first_name?: string | null;
    last_name?: string | null;
    email?: string | null;
    company_enabled?: boolean;
    company_required?: boolean;
    company?: string | null;
    country_enabled?: boolean;
    country_id?: number | null;
    country_name?: string | null;
    state_province_enabled?: boolean;
    state_province_id?: number | null;
    state_province_name?: string | null;
    county_enabled?: boolean;
    county_required?: boolean;
    county?: string | null;
    city_enabled?: boolean;
    city_required?: boolean;
    city?: string | null;
    street_address_enabled?: boolean;
    street_address_required?: boolean;
    address1?: string | null;
    street_address2_enabled?: boolean;
    street_address2_required?: boolean;
    address2?: string | null;
    zip_postal_code_enabled?: boolean;
    zip_postal_code_required?: boolean;
    zip_postal_code?: string | null;
    phone_enabled?: boolean;
    phone_required?: boolean;
    phone_number?: string | null;
    fax_enabled?: boolean;
    fax_required?: boolean;
    fax_number?: string | null;
    available_countries?: Array<SelectListItemDto> | null;
    available_states?: Array<SelectListItemDto> | null;
    formatted_custom_address_attributes?: string | null;
    custom_address_attributes?: Array<AddressAttributeModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}