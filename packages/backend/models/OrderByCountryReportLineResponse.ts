/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an "order by country" report line
 */
export type OrderByCountryReportLineResponse = {
    /**
     * Country identifier; null for unknown country
     */
    country_id?: number | null;
    /**
     * Gets or sets the number of orders
     */
    total_orders?: number;
    /**
     * Gets or sets the order total summary
     */
    sum_orders?: number;
}