/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTaxTotalTaxRateResponse = {
    /**
     * Tax total
     */
    tax_total?: number;
    /**
     * Tax rates
     */
    tax_rates?: Record<string, number> | null;
}