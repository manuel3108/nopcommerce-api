/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an order
 */
export type OrderDto = {
    /**
     * Gets or sets the order identifier
     */
    order_guid?: string;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the billing address identifier
     */
    billing_address_id?: number;
    /**
     * Gets or sets the shipping address identifier
     */
    shipping_address_id?: number | null;
    /**
     * Gets or sets the pickup address identifier
     */
    pickup_address_id?: number | null;
    /**
     * Gets or sets a value indicating whether a customer chose "pick up in store" shipping option
     */
    pickup_in_store?: boolean;
    /**
     * Gets or sets an order status identifier
     */
    order_status_id?: number;
    /**
     * Gets or sets the shipping status identifier
     */
    shipping_status_id?: number;
    /**
     * Gets or sets the payment status identifier
     */
    payment_status_id?: number;
    /**
     * Gets or sets the payment method system name
     */
    payment_method_system_name?: string | null;
    /**
     * Gets or sets the customer currency code (at the moment of order placing)
     */
    customer_currency_code?: string | null;
    /**
     * Gets or sets the currency rate
     */
    currency_rate?: number;
    /**
     * Gets or sets the customer tax display type identifier
     */
    customer_tax_display_type_id?: number;
    /**
     * Gets or sets the VAT number (the European Union Value Added Tax)
     */
    vat_number?: string | null;
    /**
     * Gets or sets the order subtotal (include tax)
     */
    order_subtotal_incl_tax?: number;
    /**
     * Gets or sets the order subtotal (exclude tax)
     */
    order_subtotal_excl_tax?: number;
    /**
     * Gets or sets the order subtotal discount (include tax)
     */
    order_sub_total_discount_incl_tax?: number;
    /**
     * Gets or sets the order subtotal discount (exclude tax)
     */
    order_sub_total_discount_excl_tax?: number;
    /**
     * Gets or sets the order shipping (include tax)
     */
    order_shipping_incl_tax?: number;
    /**
     * Gets or sets the order shipping (exclude tax)
     */
    order_shipping_excl_tax?: number;
    /**
     * Gets or sets the payment method additional fee (incl tax)
     */
    payment_method_additional_fee_incl_tax?: number;
    /**
     * Gets or sets the payment method additional fee (exclude tax)
     */
    payment_method_additional_fee_excl_tax?: number;
    /**
     * Gets or sets the tax rates
     */
    tax_rates?: string | null;
    /**
     * Gets or sets the order tax
     */
    order_tax?: number;
    /**
     * Gets or sets the order discount (applied to order total)
     */
    order_discount?: number;
    /**
     * Gets or sets the order total
     */
    order_total?: number;
    /**
     * Gets or sets the refunded amount
     */
    refunded_amount?: number;
    /**
     * Gets or sets the reward points history entry identifier when reward points were earned (gained) for placing this order
     */
    reward_points_history_entry_id?: number | null;
    /**
     * Gets or sets the checkout attribute description
     */
    checkout_attribute_description?: string | null;
    /**
     * Gets or sets the checkout attributes in XML format
     */
    checkout_attributes_xml?: string | null;
    /**
     * Gets or sets the customer language identifier
     */
    customer_language_id?: number;
    /**
     * Gets or sets the affiliate identifier
     */
    affiliate_id?: number;
    /**
     * Gets or sets the customer IP address
     */
    customer_ip?: string | null;
    /**
     * Gets or sets a value indicating whether storing of credit card number is allowed
     */
    allow_storing_credit_card_number?: boolean;
    /**
     * Gets or sets the card type
     */
    card_type?: string | null;
    /**
     * Gets or sets the card name
     */
    card_name?: string | null;
    /**
     * Gets or sets the card number
     */
    card_number?: string | null;
    /**
     * Gets or sets the masked credit card number
     */
    masked_credit_card_number?: string | null;
    /**
     * Gets or sets the card CVV2
     */
    card_cvv2?: string | null;
    /**
     * Gets or sets the card expiration month
     */
    card_expiration_month?: string | null;
    /**
     * Gets or sets the card expiration year
     */
    card_expiration_year?: string | null;
    /**
     * Gets or sets the authorization transaction identifier
     */
    authorization_transaction_id?: string | null;
    /**
     * Gets or sets the authorization transaction code
     */
    authorization_transaction_code?: string | null;
    /**
     * Gets or sets the authorization transaction result
     */
    authorization_transaction_result?: string | null;
    /**
     * Gets or sets the capture transaction identifier
     */
    capture_transaction_id?: string | null;
    /**
     * Gets or sets the capture transaction result
     */
    capture_transaction_result?: string | null;
    /**
     * Gets or sets the subscription transaction identifier
     */
    subscription_transaction_id?: string | null;
    /**
     * Gets or sets the paid date and time
     */
    paid_date_utc?: string | null;
    /**
     * Gets or sets the shipping method
     */
    shipping_method?: string | null;
    /**
     * Gets or sets the shipping rate computation method identifier or the pickup point provider identifier (if PickupInStore is true)
     */
    shipping_rate_computation_method_system_name?: string | null;
    /**
     * Gets or sets the serialized CustomValues (values from ProcessPaymentRequest)
     */
    custom_values_xml?: string | null;
    /**
     * Gets or sets a value indicating whether the entity has been deleted
     */
    deleted?: boolean;
    /**
     * Gets or sets the date and time of order creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the custom order number without prefix
     */
    custom_order_number?: string | null;
    /**
     * Gets or sets the reward points history record (spent by a customer when placing this order)
     */
    redeemed_reward_points_entry_id?: number | null;
    id?: number;
}