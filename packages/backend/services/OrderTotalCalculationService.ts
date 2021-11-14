/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdjustShippingRateResponse } from '../models/AdjustShippingRateResponse';
import type { GetShoppingCartShippingTotalResponse } from '../models/GetShoppingCartShippingTotalResponse';
import type { GetShoppingCartSubTotalResponse } from '../models/GetShoppingCartSubTotalResponse';
import type { GetShoppingCartTotalResponse } from '../models/GetShoppingCartTotalResponse';
import type { GetTaxTotalTaxRateResponse } from '../models/GetTaxTotalTaxRateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderTotalCalculationService {

    /**
     * Gets shopping cart subtotal
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param includingTax A value indicating whether calculated price should include tax
     * @returns GetShoppingCartSubTotalResponse Success
     * @throws ApiError
     */
    public static getGetShoppingCartSubTotal(
cartItemIds: string,
includingTax: boolean,
): CancelablePromise<GetShoppingCartSubTotalResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/GetShoppingCartSubTotal/${cartItemIds}`,
            query: {
                'includingTax': includingTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether shipping is free
     * @param ids Cart ids (Separator - ;)
     * @param subTotal Subtotal amount; pass null to calculate subtotal
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsFreeShipping(
ids: string,
subTotal?: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/IsFreeShipping/${ids}`,
            query: {
                'subTotal': subTotal,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adjust shipping rate (free shipping, additional charges, discounts)
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param shippingRate Shipping rate to adjust
     * @param applyToPickupInStore Adjust shipping rate to pickup in store shipping option rate
     * @returns AdjustShippingRateResponse Success
     * @throws ApiError
     */
    public static getAdjustShippingRate(
cartItemIds: string,
shippingRate: number,
applyToPickupInStore: boolean = false,
): CancelablePromise<AdjustShippingRateResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/AdjustShippingRate/${cartItemIds}`,
            query: {
                'shippingRate': shippingRate,
                'applyToPickupInStore': applyToPickupInStore,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets shopping cart shipping total
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param includingTax A value indicating whether calculated price should include tax
     * @returns GetShoppingCartShippingTotalResponse Success
     * @throws ApiError
     */
    public static getGetShoppingCartShippingTotal(
cartItemIds: string,
includingTax: boolean,
): CancelablePromise<GetShoppingCartShippingTotalResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/GetShoppingCartShippingTotal/${cartItemIds}`,
            query: {
                'includingTax': includingTax,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets tax
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param usePaymentMethodAdditionalFee A value indicating whether we should use payment method additional fee when calculating tax
     * @returns GetTaxTotalTaxRateResponse Success
     * @throws ApiError
     */
    public static getGetTaxTotal(
cartItemIds: string,
usePaymentMethodAdditionalFee: boolean = true,
): CancelablePromise<GetTaxTotalTaxRateResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/GetTaxTotal/${cartItemIds}`,
            query: {
                'usePaymentMethodAdditionalFee': usePaymentMethodAdditionalFee,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets tax
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param useRewardPoints A value indicating reward points should be used; null to detect current choice of the customer
     * @param usePaymentMethodAdditionalFee A value indicating whether we should use payment method additional fee when calculating order total
     * @returns GetShoppingCartTotalResponse Success
     * @throws ApiError
     */
    public static getGetShoppingCartTotal(
cartItemIds: string,
useRewardPoints?: boolean,
usePaymentMethodAdditionalFee: boolean = true,
): CancelablePromise<GetShoppingCartTotalResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/GetShoppingCartTotal/${cartItemIds}`,
            query: {
                'useRewardPoints': useRewardPoints,
                'usePaymentMethodAdditionalFee': usePaymentMethodAdditionalFee,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Converts existing reward points to amount
     * @param rewardPoints Reward points
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertRewardPointsToAmount(
rewardPoints: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/ConvertRewardPointsToAmount`,
            query: {
                'rewardPoints': rewardPoints,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether a customer has minimum amount of reward points to use (if enabled)
     * @param rewardPoints Reward points to check
     * @returns number Success
     * @throws ApiError
     */
    public static getCheckMinimumRewardPointsToUseRequirement(
rewardPoints: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/CheckMinimumRewardPointsToUseRequirement`,
            query: {
                'rewardPoints': rewardPoints,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Calculate how order total (maximum amount) for which reward points could be earned/reduced
     * @param orderShippingInclTax Order shipping (including tax)
     * @param orderTotal Order total
     * @returns number Success
     * @throws ApiError
     */
    public static getCalculateApplicableOrderTotalForRewardPoints(
orderShippingInclTax: number,
orderTotal: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/CalculateApplicableOrderTotalForRewardPoints`,
            query: {
                'orderShippingInclTax': orderShippingInclTax,
                'orderTotal': orderTotal,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Calculate how much reward points will be earned/reduced based on certain amount spent
     * @param customerId Customer identifier
     * @param amount Amount (in primary store currency)
     * @returns number Success
     * @throws ApiError
     */
    public static getCalculateRewardPoints(
customerId: number,
amount: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderTotalCalculation/CalculateRewardPoints/${customerId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}