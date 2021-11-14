/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssociatedExternalAuthModelDto } from './AssociatedExternalAuthModelDto';
import type { CustomerAttributeModelDto } from './CustomerAttributeModelDto';
import type { GdprConsentModelDto } from './GdprConsentModelDto';
import type { SelectListItemDto } from './SelectListItemDto';

export type CustomerInfoModelDto = {
    email?: string | null;
    email_to_revalidate?: string | null;
    check_username_availability_enabled?: boolean;
    allow_users_to_change_usernames?: boolean;
    usernames_enabled?: boolean;
    username?: string | null;
    gender_enabled?: boolean;
    gender?: string | null;
    first_name_enabled?: boolean;
    first_name?: string | null;
    first_name_required?: boolean;
    last_name_enabled?: boolean;
    last_name?: string | null;
    last_name_required?: boolean;
    date_of_birth_enabled?: boolean;
    date_of_birth_day?: number | null;
    date_of_birth_month?: number | null;
    date_of_birth_year?: number | null;
    date_of_birth_required?: boolean;
    company_enabled?: boolean;
    company_required?: boolean;
    company?: string | null;
    street_address_enabled?: boolean;
    street_address_required?: boolean;
    street_address?: string | null;
    street_address2_enabled?: boolean;
    street_address2_required?: boolean;
    street_address2?: string | null;
    zip_postal_code_enabled?: boolean;
    zip_postal_code_required?: boolean;
    zip_postal_code?: string | null;
    city_enabled?: boolean;
    city_required?: boolean;
    city?: string | null;
    county_enabled?: boolean;
    county_required?: boolean;
    county?: string | null;
    country_enabled?: boolean;
    country_required?: boolean;
    country_id?: number;
    available_countries?: Array<SelectListItemDto> | null;
    state_province_enabled?: boolean;
    state_province_required?: boolean;
    state_province_id?: number;
    available_states?: Array<SelectListItemDto> | null;
    phone_enabled?: boolean;
    phone_required?: boolean;
    phone?: string | null;
    fax_enabled?: boolean;
    fax_required?: boolean;
    fax?: string | null;
    newsletter_enabled?: boolean;
    newsletter?: boolean;
    signature_enabled?: boolean;
    signature?: string | null;
    time_zone_id?: string | null;
    allow_customers_to_set_time_zone?: boolean;
    available_time_zones?: Array<SelectListItemDto> | null;
    vat_number?: string | null;
    vat_number_status_note?: string | null;
    display_vat_number?: boolean;
    associated_external_auth_records?: Array<AssociatedExternalAuthModelDto> | null;
    number_of_external_authentication_providers?: number;
    allow_customers_to_remove_associations?: boolean;
    customer_attributes?: Array<CustomerAttributeModelDto> | null;
    gdpr_consents?: Array<GdprConsentModelDto> | null;
    custom_properties?: Record<string, any> | null;
}