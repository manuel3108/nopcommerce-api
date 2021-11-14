/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinalPriceResponse } from '../models/FinalPriceResponse';
import type { RoundingType } from '../models/RoundingType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PriceCalculationService {

    /**
     * Gets the final price
     * @param productId Product id
     * @param customerId The customer id
     * @param additionalCharge Additional charge
     * @param includeDiscounts A value indicating whether include discounts or not for final price computation
     * @param quantity Shopping cart item quantity
     * @param overriddenProductPrice Overridden product price. If specified, then it'll be used instead of a product price. For example, used with product attribute combinations
     * @param rentalStartDate Rental period start date (for rental products)
     * @param rentalEndDate Rental period end date (for rental products)
     * @returns FinalPriceResponse Success
     * @throws ApiError
     */
    public static getGetFinalPrice(
productId: number,
customerId: number,
additionalCharge: number,
includeDiscounts: boolean,
quantity: number,
overriddenProductPrice?: number,
rentalStartDate?: string,
rentalEndDate?: string,
): CancelablePromise<FinalPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceCalculation/GetFinalPrice/${productId}/${customerId}`,
            query: {
                'overriddenProductPrice': overriddenProductPrice,
                'additionalCharge': additionalCharge,
                'includeDiscounts': includeDiscounts,
                'quantity': quantity,
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the product cost (one item)
     * @param productId Product Id
     * @param requestBody Shopping cart item attributes in XML
     * @returns number Success
     * @throws ApiError
     */
    public static postGetProductCost(
productId: number,
requestBody?: string,
): CancelablePromise<number> {
        return __request({
            method: 'POST',
            path: `/api-backend/PriceCalculation/GetProductCost/${productId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a price adjustment of a product attribute value
     * @param productId Product id
     * @param valueId Product attribute value id
     * @param customerId Customer id
     * @param productPrice Product price (null for using the base product price)
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductAttributeValuePriceAdjustment(
productId: number,
valueId: number,
customerId: number,
productPrice?: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceCalculation/GetProductAttributeValuePriceAdjustment/${productId}/${valueId}/${customerId}`,
            query: {
                'productPrice': productPrice,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Round a product or order total for the currency
     * @param value Value to round
     * @param currencyId Currency Id; pass null to use the primary store currency
     * @returns number Success
     * @throws ApiError
     */
    public static postRoundPrice(
value: number,
currencyId?: number,
): CancelablePromise<number> {
        return __request({
            method: 'POST',
            path: `/api-backend/PriceCalculation/RoundPrice`,
            query: {
                'value': value,
                'currencyId': currencyId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Round
     * @param value Value to round
     * @param roundingType The rounding type
     * @returns number Success
     * @throws ApiError
     */
    public static getRound(
value: number,
roundingType: RoundingType,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/PriceCalculation/Round`,
            query: {
                'value': value,
                'roundingType': roundingType,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}