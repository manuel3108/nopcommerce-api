/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a recurring payment history
 */
export type RecurringPaymentHistoryDto = {
    /**
     * Gets or sets the recurring payment identifier
     */
    recurring_payment_id?: number;
    /**
     * Gets or sets the order identifier
     */
    order_id?: number;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    id?: number;
}