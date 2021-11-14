/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountUsageHistoryDiscountUsageHistoryDtoPagedListDto } from '../models/DiscountUsageHistoryDiscountUsageHistoryDtoPagedListDto';
import type { DiscountUsageHistoryDto } from '../models/DiscountUsageHistoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DiscountUsageHistoryService {

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/DiscountUsageHistory/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns DiscountUsageHistoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DiscountUsageHistoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountUsageHistory/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all discount usage history records
     * @param discountId Discount identifier; null to load all records
     * @param customerId Customer identifier; null to load all records
     * @param orderId Order identifier; null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns DiscountUsageHistoryDiscountUsageHistoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
discountId?: number,
customerId?: number,
orderId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<DiscountUsageHistoryDiscountUsageHistoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountUsageHistory/GetAll`,
            query: {
                'discountId': discountId,
                'customerId': customerId,
                'orderId': orderId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountUsageHistoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountUsageHistoryDto,
): CancelablePromise<DiscountUsageHistoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/DiscountUsageHistory/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}