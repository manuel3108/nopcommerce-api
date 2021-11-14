/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GiftCardUsageHistoryDto } from '../models/GiftCardUsageHistoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GiftCardUsageHistoryService {

    /**
     * Gets a gift card usage history entries by Gift card
     * @param id Gift card identifier
     * @returns GiftCardUsageHistoryDto Success
     * @throws ApiError
     */
    public static getGetGiftCardUsageHistoryByGiftCard(
id: number,
): CancelablePromise<Array<GiftCardUsageHistoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCardUsageHistory/GetGiftCardUsageHistoryByGiftCard/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a gift card usage history entries by order
     * @param id Order identifier
     * @returns GiftCardUsageHistoryDto Success
     * @throws ApiError
     */
    public static getGetGiftCardUsageHistoryByOrder(
id: number,
): CancelablePromise<Array<GiftCardUsageHistoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCardUsageHistory/GetGiftCardUsageHistoryByOrder/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a gift card usage history entry
     * @param requestBody Gift card usage history Dto model
     * @returns GiftCardUsageHistoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: GiftCardUsageHistoryDto,
): CancelablePromise<GiftCardUsageHistoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/GiftCardUsageHistory/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}