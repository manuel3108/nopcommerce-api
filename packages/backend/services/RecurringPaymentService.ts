/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from '../models/OrderStatus';
import type { RecurringPaymentDto } from '../models/RecurringPaymentDto';
import type { RecurringPaymentRecurringPaymentDtoPagedListDto } from '../models/RecurringPaymentRecurringPaymentDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RecurringPaymentService {

    /**
     * Gets a recurring payment
     * @param id Recurring payment identifier
     * @returns RecurringPaymentDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<RecurringPaymentDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/RecurringPayment/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a recurring payment
     * @param id Recurring payment identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/RecurringPayment/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an recurring payment
     * @param requestBody Recurring payment Dto model
     * @returns RecurringPaymentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: RecurringPaymentDto,
): CancelablePromise<RecurringPaymentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/RecurringPayment/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update the recurring payment
     * @param requestBody Recurring payment Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: RecurringPaymentDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/RecurringPayment/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Search recurring payments
     * @param storeId The store identifier; 0 to load all records
     * @param customerId The customer identifier; 0 to load all records
     * @param initialOrderId The initial order identifier; 0 to load all records
     * @param initialOrderStatus Initial order status identifier; null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns RecurringPaymentRecurringPaymentDtoPagedListDto Success
     * @throws ApiError
     */
    public static getSearch(
storeId?: number,
customerId?: number,
initialOrderId?: number,
initialOrderStatus?: OrderStatus,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<RecurringPaymentRecurringPaymentDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/RecurringPayment/Search`,
            query: {
                'storeId': storeId,
                'customerId': customerId,
                'initialOrderId': initialOrderId,
                'initialOrderStatus': initialOrderStatus,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}