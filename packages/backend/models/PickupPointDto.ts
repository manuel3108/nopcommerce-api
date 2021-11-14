/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pickup point
 */
export type PickupPointDto = {
    /**
     * Gets or sets a name
     */
    name?: string | null;
    /**
     * Gets or sets a description
     */
    description?: string | null;
    /**
     * Gets or sets a system name of the pickup point provider
     */
    provider_system_name?: string | null;
    /**
     * Gets or sets an address
     */
    address?: string | null;
    /**
     * Gets or sets a city
     */
    city?: string | null;
    /**
     * Gets or sets a county
     */
    county?: string | null;
    /**
     * Gets or sets a state abbreviation
     */
    state_abbreviation?: string | null;
    /**
     * Gets or sets a two-letter ISO country code
     */
    country_code?: string | null;
    /**
     * Gets or sets a zip postal code
     */
    zip_postal_code?: string | null;
    /**
     * Gets or sets a latitude
     */
    latitude?: number | null;
    /**
     * Gets or sets a longitude
     */
    longitude?: number | null;
    /**
     * Gets or sets a fee for the pickup
     */
    pickup_fee?: number;
    /**
     * Gets or sets an opening hours
     */
    opening_hours?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets a transit days
     */
    transit_days?: number | null;
    id?: number;
}