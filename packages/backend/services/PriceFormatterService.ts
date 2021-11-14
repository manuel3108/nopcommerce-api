/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PriceFormatterService {

    /**
     * Formats the price
     * @param languageId Language
     * @param price Price
     * @param showCurrency A value indicating whether to show a currency
     * @param targetCurrency Target currency code
     * @param priceIncludesTax A value indicating whether price includes tax
     * @param showTax A value indicating whether to show tax suffix
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatPrice(
languageId: number,
price: number,
showCurrency: boolean,
targetCurrency: string,
priceIncludesTax: boolean,
showTax: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatPrice/${languageId}`,
            query: {
                'price': price,
                'showCurrency': showCurrency,
                'targetCurrency': targetCurrency,
                'priceIncludesTax': priceIncludesTax,
                'showTax': showTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the order price
     * @param languageId Language
     * @param primaryStoreCurrencyId Primary store currency id
     * @param price Price
     * @param currencyRate Currency rate
     * @param customerCurrencyCode Customer currency code
     * @param displayCustomerCurrency A value indicating whether to display price on customer currency
     * @param priceIncludesTax A value indicating whether price includes tax
     * @param showTax A value indicating whether to show tax suffix
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatOrderPrice(
languageId: number,
primaryStoreCurrencyId: number,
price: number,
currencyRate: number,
customerCurrencyCode: string,
displayCustomerCurrency: boolean,
priceIncludesTax?: boolean,
showTax?: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatOrderPrice/${languageId}/${primaryStoreCurrencyId}`,
            query: {
                'price': price,
                'currencyRate': currencyRate,
                'customerCurrencyCode': customerCurrencyCode,
                'displayCustomerCurrency': displayCustomerCurrency,
                'priceIncludesTax': priceIncludesTax,
                'showTax': showTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the price of rental product (with rental period)
     * @param productId Product Id
     * @param price Price
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatRentalProductPeriod(
productId: number,
price: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatRentalProductPeriod/${productId}`,
            query: {
                'price': price,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the shipping price
     * @param languageId Language
     * @param price Price
     * @param showCurrency A value indicating whether to show a currency
     * @param currencyCode Currency code
     * @param priceIncludesTax A value indicating whether price includes tax
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatShippingPrice(
languageId: number,
price: number,
showCurrency: boolean,
currencyCode: string,
priceIncludesTax: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatShippingPrice/${languageId}`,
            query: {
                'price': price,
                'showCurrency': showCurrency,
                'currencyCode': currencyCode,
                'priceIncludesTax': priceIncludesTax,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Formats the payment method additional fee
     * @param languageId Language
     * @param price Price
     * @param showCurrency A value indicating whether to show a currency
     * @param currencyCode Currency code
     * @param priceIncludesTax A value indicating whether price includes tax
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatPaymentMethodAdditionalFee(
languageId: number,
price: number,
showCurrency: boolean,
currencyCode: string,
priceIncludesTax: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatPaymentMethodAdditionalFee/${languageId}`,
            query: {
                'price': price,
                'showCurrency': showCurrency,
                'currencyCode': currencyCode,
                'priceIncludesTax': priceIncludesTax,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Formats a tax rate
     * @param taxRate Tax rate
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatTaxRate(
taxRate: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatTaxRate`,
            query: {
                'taxRate': taxRate,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Format base price (PAngV)
     * @param productId Product id
     * @param productPrice Product price (in primary currency). Pass null if you want to use a default produce price
     * @param totalWeight Total weight of product (with attribute weight adjustment). Pass null if you want to use a default produce weight
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatBasePrice(
productId: number,
productPrice?: number,
totalWeight?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceFormatter/FormatBasePrice/${productId}`,
            query: {
                'productPrice': productPrice,
                'totalWeight': totalWeight,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}