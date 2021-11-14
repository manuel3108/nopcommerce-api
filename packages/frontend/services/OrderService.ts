/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerOrderListModelDto } from '../models/CustomerOrderListModelDto';
import type { CustomerRewardPointsModelDto } from '../models/CustomerRewardPointsModelDto';
import type { OrderDetailsModelDto } from '../models/OrderDetailsModelDto';
import type { ShipmentDetailsModelDto } from '../models/ShipmentDetailsModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * @returns CustomerOrderListModelDto Success
     * @throws ApiError
     */
    public static getCustomerOrders(): CancelablePromise<CustomerOrderListModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/CustomerOrders`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerOrderListModelDto Success
     * @throws ApiError
     */
    public static postCancelRecurringPayment(
requestBody?: Record<string, string>,
): CancelablePromise<CustomerOrderListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Order/CancelRecurringPayment`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerOrderListModelDto Success
     * @throws ApiError
     */
    public static postRetryLastRecurringPayment(
requestBody?: Record<string, string>,
): CancelablePromise<CustomerOrderListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Order/RetryLastRecurringPayment`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param pageNumber 
     * @returns CustomerRewardPointsModelDto Success
     * @throws ApiError
     */
    public static getCustomerRewardPoints(
pageNumber?: number,
): CancelablePromise<CustomerRewardPointsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/CustomerRewardPoints`,
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param orderId 
     * @returns OrderDetailsModelDto Success
     * @throws ApiError
     */
    public static getDetails(
orderId: number,
): CancelablePromise<OrderDetailsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/Details/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param orderId 
     * @returns string Success
     * @throws ApiError
     */
    public static getGetPdfInvoice(
orderId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/GetPdfInvoice/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param orderId 
     * @returns any Success
     * @throws ApiError
     */
    public static getReOrder(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/ReOrder/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param orderId 
     * @returns any Success
     * @throws ApiError
     */
    public static getRePostPayment(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/RePostPayment/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param shipmentId 
     * @returns ShipmentDetailsModelDto Success
     * @throws ApiError
     */
    public static getShipmentDetails(
shipmentId: number,
): CancelablePromise<ShipmentDetailsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Order/ShipmentDetails/${shipmentId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}