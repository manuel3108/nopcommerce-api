/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a GDPR consent
 */
export type GdprConsentDto = {
    /**
     * Gets or sets the message displayed to customers
     */
    message?: string | null;
    /**
     * Gets or setsa value indicating whether the consent is required
     */
    is_required?: boolean;
    /**
     * Gets or sets the message displayed to customers when he/she doesn't agree to this consent
     */
    required_message?: string | null;
    /**
     * Gets or sets the value indicating whether this consent is displayed during registrations
     */
    display_during_registration?: boolean;
    /**
     * Gets or sets the value indicating whether this consent is displayed on my account page (customer info)
     */
    display_on_customer_info_page?: boolean;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}