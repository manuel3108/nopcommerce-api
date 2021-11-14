/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an address
 */
export type AddressDto = {
    /**
     * Gets or sets the first name
     */
    first_name?: string | null;
    /**
     * Gets or sets the last name
     */
    last_name?: string | null;
    /**
     * Gets or sets the email
     */
    email?: string | null;
    /**
     * Gets or sets the company
     */
    company?: string | null;
    /**
     * Gets or sets the country identifier
     */
    country_id?: number | null;
    /**
     * Gets or sets the state/province identifier
     */
    state_province_id?: number | null;
    /**
     * Gets or sets the county
     */
    county?: string | null;
    /**
     * Gets or sets the city
     */
    city?: string | null;
    /**
     * Gets or sets the address 1
     */
    address1?: string | null;
    /**
     * Gets or sets the address 2
     */
    address2?: string | null;
    /**
     * Gets or sets the zip/postal code
     */
    zip_postal_code?: string | null;
    /**
     * Gets or sets the phone number
     */
    phone_number?: string | null;
    /**
     * Gets or sets the fax number
     */
    fax_number?: string | null;
    /**
     * Gets or sets the custom attributes (see "AddressAttribute" entity for more info)
     */
    custom_attributes?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}