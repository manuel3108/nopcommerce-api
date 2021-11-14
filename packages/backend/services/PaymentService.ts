/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecurringPaymentType } from '../models/RecurringPaymentType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PaymentService {

    /**
     * Gets a value indicating whether customers can complete a payment after order is placed but not completed (for redirection payment methods)
     * @param orderId Order identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanRePostProcessPayment(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/CanRePostProcessPayment/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets an additional handling fee of a payment method
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param paymentMethodSystemName Payment method system name
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAdditionalHandlingFee(
cartItemIds: string,
paymentMethodSystemName: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/GetAdditionalHandlingFee/${cartItemIds}`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether capture is supported by payment method
     * @param paymentMethodSystemName Payment method system name
     * @returns boolean Success
     * @throws ApiError
     */
    public static getSupportCapture(
paymentMethodSystemName: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/SupportCapture`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether partial refund is supported by payment method
     * @param paymentMethodSystemName Payment method system name
     * @returns boolean Success
     * @throws ApiError
     */
    public static getSupportPartiallyRefund(
paymentMethodSystemName: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/SupportPartiallyRefund`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether refund is supported by payment method
     * @param paymentMethodSystemName Payment method system name
     * @returns boolean Success
     * @throws ApiError
     */
    public static getSupportRefund(
paymentMethodSystemName: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/SupportRefund`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether void is supported by payment method
     * @param paymentMethodSystemName Payment method system name
     * @returns boolean Success
     * @throws ApiError
     */
    public static getSupportVoid(
paymentMethodSystemName: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/SupportVoid`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a recurring payment type of payment method
     * @param paymentMethodSystemName Payment method system name
     * @returns RecurringPaymentType Success
     * @throws ApiError
     */
    public static getGetRecurringPaymentType(
paymentMethodSystemName: string,
): CancelablePromise<RecurringPaymentType> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/GetRecurringPaymentType`,
            query: {
                'paymentMethodSystemName': paymentMethodSystemName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Calculate payment method fee
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param fee Fee value
     * @param usePercentage Is fee amount specified as percentage or fixed value?
     * @returns number Success
     * @throws ApiError
     */
    public static getCalculateAdditionalFee(
cartItemIds: string,
fee: number,
usePercentage: boolean,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Payment/CalculateAdditionalFee/${cartItemIds}`,
            query: {
                'fee': fee,
                'usePercentage': usePercentage,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}