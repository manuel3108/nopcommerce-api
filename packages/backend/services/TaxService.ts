/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetTaxTotalResponse } from '../models/GetTaxTotalResponse';
import type { GetVatNumberStatusResponse } from '../models/GetVatNumberStatusResponse';
import type { ProductPriceResponse } from '../models/ProductPriceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TaxService {

    /**
     * Gets price
     * @param productId Product identifier
     * @param taxCategoryId Tax category identifier
     * @param price Price
     * @param includingTax A value indicating whether calculated price should include tax
     * @param customerId Customer identifier
     * @param priceIncludesTax A value indicating whether price already includes tax
     * @returns ProductPriceResponse Success
     * @throws ApiError
     */
    public static getGetProductPrice(
productId: number,
taxCategoryId: number,
price: number,
includingTax: boolean,
customerId: number,
priceIncludesTax: boolean,
): CancelablePromise<ProductPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetProductPrice/${productId}/${taxCategoryId}/${customerId}`,
            query: {
                'price': price,
                'includingTax': includingTax,
                'priceIncludesTax': priceIncludesTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets shipping price
     * @param price Price
     * @param includingTax A value indicating whether calculated price should include tax
     * @param customerId Customer identifier
     * @returns ProductPriceResponse Success
     * @throws ApiError
     */
    public static getGetShippingPrice(
price: number,
includingTax: boolean,
customerId: number,
): CancelablePromise<ProductPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetShippingPrice/${customerId}`,
            query: {
                'price': price,
                'includingTax': includingTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets payment method additional handling fee
     * @param price Price
     * @param includingTax A value indicating whether calculated price should include tax
     * @param customerId Customer identifier
     * @returns ProductPriceResponse Success
     * @throws ApiError
     */
    public static getGetPaymentMethodAdditionalFee(
price: number,
includingTax: boolean,
customerId: number,
): CancelablePromise<ProductPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetPaymentMethodAdditionalFee/${customerId}`,
            query: {
                'price': price,
                'includingTax': includingTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets checkout attribute value price
     * @param checkoutAttributeId Checkout attribute identifier
     * @param checkoutAttributeValueId Checkout attribute value identifier
     * @param includingTax A value indicating whether calculated price should include tax
     * @param customerId Customer identifier
     * @returns ProductPriceResponse Success
     * @throws ApiError
     */
    public static getGetCheckoutAttributePrice(
checkoutAttributeId: number,
checkoutAttributeValueId: number,
includingTax: boolean,
customerId: number,
): CancelablePromise<ProductPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetCheckoutAttributePrice/${checkoutAttributeId}/${checkoutAttributeValueId}/${customerId}`,
            query: {
                'includingTax': includingTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets VAT Number status
     * @param fullVatNumber Two letter ISO code of a country and VAT number (e.g. GB 111 1111 111)
     * @returns GetVatNumberStatusResponse Success
     * @throws ApiError
     */
    public static getGetVatNumberStatus(
fullVatNumber: string,
): CancelablePromise<GetVatNumberStatusResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetVatNumberStatus`,
            query: {
                'fullVatNumber': fullVatNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get tax total for the passed shopping cart
     * @param customerId Customer identifier
     * @param storeId Store identifier
     * @param usePaymentMethodAdditionalFee A value indicating whether we should use payment method additional fee when calculating tax
     * @returns GetTaxTotalResponse Success
     * @throws ApiError
     */
    public static getGetTaxTotal(
customerId: number,
storeId: number,
usePaymentMethodAdditionalFee: boolean = true,
): CancelablePromise<GetTaxTotalResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Tax/GetTaxTotal/${customerId}/${storeId}`,
            query: {
                'usePaymentMethodAdditionalFee': usePaymentMethodAdditionalFee,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}