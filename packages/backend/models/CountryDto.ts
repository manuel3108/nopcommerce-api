/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a country
 */
export type CountryDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets a value indicating whether billing is allowed to this country
     */
    allows_billing?: boolean;
    /**
     * Gets or sets a value indicating whether shipping is allowed to this country
     */
    allows_shipping?: boolean;
    /**
     * Gets or sets the two letter ISO code
     */
    two_letter_iso_code?: string | null;
    /**
     * Gets or sets the three letter ISO code
     */
    three_letter_iso_code?: string | null;
    /**
     * Gets or sets the numeric ISO code
     */
    numeric_iso_code?: number;
    /**
     * Gets or sets a value indicating whether customers in this country must be charged EU VAT
     */
    subject_to_vat?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    id?: number;
}