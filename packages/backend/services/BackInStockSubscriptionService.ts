/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto } from '../models/BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto';
import type { BackInStockSubscriptionDto } from '../models/BackInStockSubscriptionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BackInStockSubscriptionService {

    /**
     * Gets all subscriptions
     * @param customerId Customer identifier
     * @param storeId Store identifier; pass 0 to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAllByCustomerId(
customerId: number,
storeId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BackInStockSubscription/GetAllByCustomerId/${customerId}`,
            query: {
                'storeId': storeId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all subscriptions
     * @param customerId Customer id
     * @param productId Product identifier
     * @param storeId Store identifier
     * @returns BackInStockSubscriptionDto Success
     * @throws ApiError
     */
    public static getFindSubscription(
customerId: number,
productId: number,
storeId: number,
): CancelablePromise<BackInStockSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BackInStockSubscription/FindSubscription/${customerId}/${productId}/${storeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Send notification to subscribers
     * @param productId Product Id
     * @returns any Success
     * @throws ApiError
     */
    public static getSendNotificationsToSubscribers(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/BackInStockSubscription/SendNotificationsToSubscribers/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all subscriptions
     * @param productId Product identifier
     * @param storeId Store identifier; pass 0 to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAllByProduct(
productId: number,
storeId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<BackInStockSubscriptionBackInStockSubscriptionDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BackInStockSubscription/GetAllByProduct/${productId}`,
            query: {
                'storeId': storeId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a back in stock subscription
     * @param id Subscription identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/BackInStockSubscription/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a subscription
     * @param id Subscription identifier
     * @returns BackInStockSubscriptionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<BackInStockSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BackInStockSubscription/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Inserts subscription
     * @param requestBody Subscription model
     * @returns BackInStockSubscriptionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: BackInStockSubscriptionDto,
): CancelablePromise<BackInStockSubscriptionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/BackInStockSubscription/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}