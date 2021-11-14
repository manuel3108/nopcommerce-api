/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShippingOptionDto = {
    /**
     * Gets or sets the system name of shipping rate computation method
     */
    shipping_rate_computation_method_system_name?: string | null;
    /**
     * Gets or sets a shipping rate (without discounts, additional shipping charges, etc)
     */
    rate?: number;
    /**
     * Gets or sets a shipping option name
     */
    name?: string | null;
    /**
     * Gets or sets a shipping option description
     */
    description?: string | null;
    /**
     * Gets or sets a transit days
     */
    transit_days?: number | null;
    /**
     * Gets or sets a value indicating if it's pickup in store shipping option
     */
    is_pickup_in_store?: boolean;
}