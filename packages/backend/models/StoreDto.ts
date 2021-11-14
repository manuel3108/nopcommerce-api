/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a store
 */
export type StoreDto = {
    /**
     * Gets or sets the store name
     */
    name?: string | null;
    /**
     * Gets or sets the store URL
     */
    url?: string | null;
    /**
     * Gets or sets a value indicating whether SSL is enabled
     */
    ssl_enabled?: boolean;
    /**
     * Gets or sets the comma separated list of possible HTTP_HOST values
     */
    hosts?: string | null;
    /**
     * Gets or sets the identifier of the default language for this store; 0 is set when we use the default language display order
     */
    default_language_id?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the company name
     */
    company_name?: string | null;
    /**
     * Gets or sets the company address
     */
    company_address?: string | null;
    /**
     * Gets or sets the store phone number
     */
    company_phone_number?: string | null;
    /**
     * Gets or sets the company VAT (used in Europe Union countries)
     */
    company_vat?: string | null;
    id?: number;
}