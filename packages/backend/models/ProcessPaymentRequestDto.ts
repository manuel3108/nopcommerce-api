/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDto } from './OrderDto';

/**
 * Represents a payment info holder
 */
export type ProcessPaymentRequestDto = {
    /**
     * Gets or sets a store identifier
     */
    store_id?: number;
    /**
     * Gets or sets a customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets an order unique identifier. Used when order is not saved yet (payment gateways that do not redirect a customer to a third-party URL)
     */
    order_guid?: string;
    /**
     * Gets or sets a datetime when "OrderGuid" property was generated (used for security purposes)
     */
    order_guid_generated_on_utc?: string | null;
    /**
     * Gets or sets an order total
     */
    order_total?: number;
    /**
     * /// <summary>
 * Gets or sets a payment method identifier
 * </summary>
     */
    payment_method_system_name?: string | null;
    /**
     * Gets or sets a credit card type (Visa, Master Card, etc...). We leave it empty if not used by a payment gateway
     */
    credit_card_type?: string | null;
    /**
     * Gets or sets a credit card owner name
     */
    credit_card_name?: string | null;
    /**
     * Gets or sets a credit card number
     */
    credit_card_number?: string | null;
    /**
     * Gets or sets a credit card expire year
     */
    credit_card_expire_year?: number;
    /**
     * Gets or sets a credit card expire month
     */
    credit_card_expire_month?: number;
    /**
     * Gets or sets a credit card CVV2 (Card Verification Value)
     */
    credit_card_cvv2?: string | null;
    initial_order?: OrderDto;
    /**
     * Gets or sets the cycle length
     */
    recurring_cycle_length?: number;
    /**
     * Gets or sets the cycle period
     */
    recurring_cycle_period?: number;
    /**
     * Gets or sets the total cycles
     */
    recurring_total_cycles?: number;
    /**
     * You can store any custom value in this property
     */
    custom_values?: Record<string, any> | null;
}