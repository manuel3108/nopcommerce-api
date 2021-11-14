/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GiftCardDto } from '../models/GiftCardDto';
import type { GiftCardGiftCardDtoPagedListDto } from '../models/GiftCardGiftCardDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GiftCardService {

    /**
     * Delete a gift card
     * @param id Gift card identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/GiftCard/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a gift card
     * @param id Gift card identifier
     * @returns GiftCardDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<GiftCardDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all gift cards
     * @param purchasedWithOrderId Associated order ID; null to load all records
     * @param usedWithOrderId The order ID in which the gift card was used; null to load all records
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param isGiftCardActivated Value indicating whether gift card is activated; null to load all records
     * @param giftCardCouponCode Gift card coupon code; null to load all records
     * @param recipientName Recipient name; null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns GiftCardGiftCardDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
purchasedWithOrderId?: number,
usedWithOrderId?: number,
createdFromUtc?: string,
createdToUtc?: string,
isGiftCardActivated?: boolean,
giftCardCouponCode?: string,
recipientName?: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<GiftCardGiftCardDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/GetAll`,
            query: {
                'purchasedWithOrderId': purchasedWithOrderId,
                'usedWithOrderId': usedWithOrderId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'isGiftCardActivated': isGiftCardActivated,
                'giftCardCouponCode': giftCardCouponCode,
                'recipientName': recipientName,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create an gift card
     * @param requestBody Gift card Dto model
     * @returns GiftCardDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: GiftCardDto,
): CancelablePromise<GiftCardDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/GiftCard/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update an gift card
     * @param requestBody Gift card Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: GiftCardDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/GiftCard/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets gift cards by 'PurchasedWithOrderItemId'
     * @param id Purchased with order item identifier
     * @returns GiftCardDto Success
     * @throws ApiError
     */
    public static getGetByPurchasedWithOrderItemId(
id: number,
): CancelablePromise<Array<GiftCardDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/GetByPurchasedWithOrderItemId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get active gift cards that are applied by a customer
     * @param id Customer identifier
     * @returns GiftCardDto Success
     * @throws ApiError
     */
    public static getGetAppliedByCustomer(
id: number,
): CancelablePromise<Array<GiftCardDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/GetAppliedByCustomer/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Is gift card valid
     * @param id Gift card identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsGiftCardValid(
id: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/IsGiftCardValid/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a gift card remaining amount
     * @param id Gift card identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetGiftCardRemainingAmount(
id: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/GiftCard/GetGiftCardRemainingAmount/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}