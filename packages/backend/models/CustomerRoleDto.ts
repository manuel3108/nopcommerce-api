/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a customer role
 */
export type CustomerRoleDto = {
    /**
     * Gets or sets the customer role name
     */
    name?: string | null;
    /**
     * Gets or sets a value indicating whether the customer role is marked as free shipping
     */
    free_shipping?: boolean;
    /**
     * Gets or sets a value indicating whether the customer role is marked as tax exempt
     */
    tax_exempt?: boolean;
    /**
     * Gets or sets a value indicating whether the customer role is active
     */
    active?: boolean;
    /**
     * Gets or sets a value indicating whether the customer role is system
     */
    is_system_role?: boolean;
    /**
     * Gets or sets the customer role system name
     */
    system_name?: string | null;
    /**
     * Gets or sets a value indicating whether the customers must change passwords after a specified time
     */
    enable_password_lifetime?: boolean;
    /**
     * Gets or sets a value indicating whether the customers of this role have other tax display type chosen instead of the default one
     */
    override_tax_display_type?: boolean;
    /**
     * Gets or sets identifier of the default tax display type (used only with "OverrideTaxDisplayType" enabled)
     */
    default_tax_display_type_id?: number;
    /**
     * Gets or sets a product identifier that is required by this customer role.
 * A customer is added to this customer role once a specified product is purchased.
     */
    purchased_with_product_id?: number;
    id?: number;
}