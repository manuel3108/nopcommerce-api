/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an exchange rate
 */
export type ExchangeRateDto = {
    /**
     * The three letter ISO code for the Exchange Rate, e.g. USD
     */
    currency_code?: string | null;
    /**
     * The conversion rate of this currency from the base currency
     */
    rate?: number;
    /**
     * When was this exchange rate updated from the data source (the data XML feed)
     */
    updated_on?: string;
}