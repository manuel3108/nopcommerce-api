/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckoutPickupPointModelDto = {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    provider_system_name?: string | null;
    address?: string | null;
    city?: string | null;
    county?: string | null;
    state_name?: string | null;
    country_name?: string | null;
    zip_postal_code?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    pickup_fee?: string | null;
    opening_hours?: string | null;
    custom_properties?: Record<string, any> | null;
}