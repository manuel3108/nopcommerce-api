/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BackInStockSubscribeModelDto } from '../models/BackInStockSubscribeModelDto';
import type { CustomerBackInStockSubscriptionsModelDto } from '../models/CustomerBackInStockSubscriptionsModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BackInStockSubscriptionService {

    /**
     * Product details page > back in stock subscribe
     * @param productId The product identifier
     * @returns BackInStockSubscribeModelDto Success
     * @throws ApiError
     */
    public static getSubscribePopup(
productId: number,
): CancelablePromise<BackInStockSubscribeModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/BackInStockSubscription/SubscribePopup/${productId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Back in stock subscribe
     * @param productId Product id
     * @returns string Success
     * @throws ApiError
     */
    public static postSubscribePopupPost(
productId: number,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-frontend/BackInStockSubscription/SubscribePopupPOST/${productId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * My account / Back in stock subscriptions
     * @param pageNumber Page number
     * @returns CustomerBackInStockSubscriptionsModelDto Success
     * @throws ApiError
     */
    public static getCustomerSubscriptions(
pageNumber?: number,
): CancelablePromise<CustomerBackInStockSubscriptionsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/BackInStockSubscription/CustomerSubscriptions`,
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
     * @param requestBody 
     * @returns CustomerBackInStockSubscriptionsModelDto Success
     * @throws ApiError
     */
    public static postCustomerSubscriptionsPost(
requestBody?: Record<string, string>,
): CancelablePromise<CustomerBackInStockSubscriptionsModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/BackInStockSubscription/CustomerSubscriptionsPOST`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}