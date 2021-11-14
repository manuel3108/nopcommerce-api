/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an order average report line
 */
export type OrderAverageReportLineResponse = {
    /**
     * Gets or sets the count
     */
    count_orders?: number;
    /**
     * Gets or sets the shipping summary (excluding tax)
     */
    sum_shipping_excl_tax?: number;
    /**
     * Gets or sets the payment fee summary (excluding tax)
     */
    order_payment_fee_excl_tax_sum?: number;
    /**
     * Gets or sets the tax summary
     */
    sum_tax?: number;
    /**
     * Gets or sets the order total summary
     */
    sum_orders?: number;
    /**
     * Gets or sets the refunded amount summary
     */
    sum_refunded_amount?: number;
}