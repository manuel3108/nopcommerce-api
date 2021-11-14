/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a recurring payment
 */
export type RecurringPaymentDto = {
    /**
     * Gets or sets the cycle length
     */
    cycle_length?: number;
    /**
     * Gets or sets the cycle period identifier
     */
    cycle_period_id?: number;
    /**
     * Gets or sets the total cycles
     */
    total_cycles?: number;
    /**
     * Gets or sets the start date
     */
    start_date_utc?: string;
    /**
     * Gets or sets a value indicating whether the payment is active
     */
    is_active?: boolean;
    /**
     * Gets or sets a value indicating whether the last payment failed
     */
    last_payment_failed?: boolean;
    /**
     * Gets or sets a value indicating whether the entity has been deleted
     */
    deleted?: boolean;
    /**
     * Gets or sets the initial order identifier
     */
    initial_order_id?: number;
    /**
     * Gets or sets the date and time of payment creation
     */
    created_on_utc?: string;
    id?: number;
}