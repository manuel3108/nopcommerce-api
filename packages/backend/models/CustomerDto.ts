/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a customer
 */
export type CustomerDto = {
    /**
     * Gets or sets the customer GUID
     */
    customer_guid?: string;
    /**
     * Gets or sets the username
     */
    username?: string | null;
    /**
     * Gets or sets the email
     */
    email?: string | null;
    /**
     * Gets or sets the email that should be re-validated. Used in scenarios when a customer is already registered and wants to change an email address.
     */
    email_to_revalidate?: string | null;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets a value indicating whether the customer is tax exempt
     */
    is_tax_exempt?: boolean;
    /**
     * Gets or sets the affiliate identifier
     */
    affiliate_id?: number;
    /**
     * Gets or sets the vendor identifier with which this customer is associated (maganer)
     */
    vendor_id?: number;
    /**
     * Gets or sets a value indicating whether this customer has some products in the shopping cart
 * <remarks>The same as if we run ShoppingCartItems.Count > 0
 * We use this property for performance optimization:
 * if this property is set to false, then we do not need to load "ShoppingCartItems" navigation property for each page load
 * It's used only in a couple of places in the presenation layer
 * </remarks>
     */
    has_shopping_cart_items?: boolean;
    /**
     * Gets or sets a value indicating whether the customer is required to re-login
     */
    require_re_login?: boolean;
    /**
     * Gets or sets a value indicating number of failed login attempts (wrong password)
     */
    failed_login_attempts?: number;
    /**
     * Gets or sets the date and time until which a customer cannot login (locked out)
     */
    cannot_login_until_date_utc?: string | null;
    /**
     * Gets or sets a value indicating whether the customer is active
     */
    active?: boolean;
    /**
     * Gets or sets a value indicating whether the customer has been deleted
     */
    deleted?: boolean;
    /**
     * Gets or sets a value indicating whether the customer account is system
     */
    is_system_account?: boolean;
    /**
     * Gets or sets the customer system name
     */
    system_name?: string | null;
    /**
     * Gets or sets the last IP address
     */
    last_ip_address?: string | null;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of last login
     */
    last_login_date_utc?: string | null;
    /**
     * Gets or sets the date and time of last activity
     */
    last_activity_date_utc?: string;
    /**
     * Gets or sets the store identifier in which customer registered
     */
    registered_in_store_id?: number;
    /**
     * Gets or sets the billing address identifier
     */
    billing_address_id?: number | null;
    /**
     * Gets or sets the shipping address identifier
     */
    shipping_address_id?: number | null;
    id?: number;
}