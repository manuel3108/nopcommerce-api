/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents sales summary report line
 */
export type SalesSummaryReportLineDto = {
    summary?: string | null;
    number_of_orders?: number;
    profit?: number;
    profit_str?: string | null;
    shipping?: string | null;
    tax?: string | null;
    order_total?: string | null;
    summary_type?: number;
}