/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTaxTotalResponse = {
    /**
     * Tax total
     */
    tax_total?: number;
    /**
     * Tax rates
     */
    tax_rates?: Record<string, number> | null;
    /**
     * Errors
     */
    errors?: Array<string> | null;
    /**
     * A value indicating whether request has been completed successfully
     */
    readonly success?: boolean;
}