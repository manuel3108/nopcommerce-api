/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a currency
 */
export type CurrencyDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the currency code
     */
    currency_code?: string | null;
    /**
     * Gets or sets the rate
     */
    rate?: number;
    /**
     * Gets or sets the display locale
     */
    display_locale?: string | null;
    /**
     * Gets or sets the custom formatting
     */
    custom_formatting?: string | null;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of instance update
     */
    updated_on_utc?: string;
    /**
     * Gets or sets the rounding type identifier
     */
    rounding_type_id?: number;
    id?: number;
}