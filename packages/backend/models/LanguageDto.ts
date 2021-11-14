/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a language
 */
export type LanguageDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the language culture
     */
    language_culture?: string | null;
    /**
     * Gets or sets the unique SEO code
     */
    unique_seo_code?: string | null;
    /**
     * Gets or sets the flag image file name
     */
    flag_image_file_name?: string | null;
    /**
     * Gets or sets a value indicating whether the language supports "Right-to-left"
     */
    rtl?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets the identifier of the default currency for this language; 0 is set when we use the default currency display order
     */
    default_currency_id?: number;
    /**
     * Gets or sets a value indicating whether the language is published
     */
    published?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}