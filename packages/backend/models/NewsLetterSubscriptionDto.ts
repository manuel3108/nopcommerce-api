/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents NewsLetterSubscription entity
 */
export type NewsLetterSubscriptionDto = {
    /**
     * Gets or sets the newsletter subscription GUID
     */
    news_letter_subscription_guid?: string;
    /**
     * Gets or sets the subscriber email
     */
    email?: string | null;
    /**
     * Gets or sets a value indicating whether subscription is active
     */
    active?: boolean;
    /**
     * Gets or sets the store identifier in which a customer has subscribed to newsletter
     */
    store_id?: number;
    /**
     * Gets or sets the date and time when subscription was created
     */
    created_on_utc?: string;
    id?: number;
}