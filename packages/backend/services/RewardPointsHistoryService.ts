/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RewardPointsHistoryDto } from '../models/RewardPointsHistoryDto';
import type { RewardPointsHistoryRewardPointsHistoryDtoPagedListDto } from '../models/RewardPointsHistoryRewardPointsHistoryDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RewardPointsHistoryService {

    /**
     * Load reward point history records
     * @param customerId Customer identifier; 0 to load all records
     * @param storeId Store identifier; pass null to load all records
     * @param showNotActivated A value indicating whether to show reward points that did not yet activated
     * @param orderGuid Order Guid; pass null to load all record
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns RewardPointsHistoryRewardPointsHistoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetRewardPointsHistory(
customerId?: number,
storeId?: number,
showNotActivated: boolean = false,
orderGuid?: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<RewardPointsHistoryRewardPointsHistoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/RewardPointsHistory/GetRewardPointsHistory`,
            query: {
                'customerId': customerId,
                'storeId': storeId,
                'showNotActivated': showNotActivated,
                'orderGuid': orderGuid,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets reward points balance
     * @param customerId Customer identifier
     * @param storeId Store identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetRewardPointsBalance(
customerId: number,
storeId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/RewardPointsHistory/GetRewardPointsBalance/${customerId}/${storeId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets reduced reward points balance per order
     * @param rewardPointsBalance Reward points balance
     * @returns number Success
     * @throws ApiError
     */
    public static getGetReducedPointsBalance(
rewardPointsBalance: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/RewardPointsHistory/GetReducedPointsBalance`,
            query: {
                'rewardPointsBalance': rewardPointsBalance,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Add reward points history record
     * @param customerId Customer identifier
     * @param points Number of points to add
     * @param storeId Store identifier
     * @param message Message
     * @param usedWithOrderId The order identifier for which points were redeemed (spent) as a payment
     * @param usedAmount Used amount
     * @param activatingDate Date and time of activating reward points; pass null to immediately activating
     * @param endDate Date and time when the reward points will no longer be valid; pass null to add date termless points
     * @returns number Success
     * @throws ApiError
     */
    public static getAddRewardPointsHistoryEntry(
customerId: number,
points: number,
storeId: number,
message: string = '',
usedWithOrderId?: number,
usedAmount?: number,
activatingDate?: string,
endDate?: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/RewardPointsHistory/AddRewardPointsHistoryEntry/${customerId}/${storeId}`,
            query: {
                'points': points,
                'message': message,
                'usedWithOrderId': usedWithOrderId,
                'usedAmount': usedAmount,
                'activatingDate': activatingDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a reward point history entry
     * @param id Reward point history entry identifier
     * @returns RewardPointsHistoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<RewardPointsHistoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/RewardPointsHistory/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update the reward point history entry
     * @param requestBody Reward point history Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: RewardPointsHistoryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/RewardPointsHistory/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete the reward point history entry
     * @param id Reward point history identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/RewardPointsHistory/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}