/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnRequestDto } from '../models/ReturnRequestDto';
import type { ReturnRequestReturnRequestDtoPagedListDto } from '../models/ReturnRequestReturnRequestDtoPagedListDto';
import type { ReturnRequestStatus } from '../models/ReturnRequestStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ReturnRequestService {

    /**
     * Delete a return request
     * @param id Return request identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ReturnRequest/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a return request
     * @param id Return request identifier
     * @returns ReturnRequestDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ReturnRequestDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequest/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Search return requests
     * @param storeId Store identifier; 0 to load all entries
     * @param customerId Customer identifier; 0 to load all entries
     * @param orderItemId Order item identifier; 0 to load all entries
     * @param customNumber Custom number; null or empty to load all entries
     * @param rs Return request status; null to load all entries
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param getOnlyTotalCount A value in indicating whether you want to load only total number of records. Set to "true" if you don't want to load data from database
     * @returns ReturnRequestReturnRequestDtoPagedListDto Success
     * @throws ApiError
     */
    public static getSearch(
storeId?: number,
customerId?: number,
orderItemId?: number,
customNumber: string = '',
rs?: ReturnRequestStatus,
createdFromUtc?: string,
createdToUtc?: string,
pageIndex?: number,
pageSize: number = 2147483647,
getOnlyTotalCount: boolean = false,
): CancelablePromise<ReturnRequestReturnRequestDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequest/Search`,
            query: {
                'storeId': storeId,
                'customerId': customerId,
                'orderItemId': orderItemId,
                'customNumber': customNumber,
                'rs': rs,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'getOnlyTotalCount': getOnlyTotalCount,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a return request
     * @param requestBody Return request Dto model
     * @returns ReturnRequestDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ReturnRequestDto,
): CancelablePromise<ReturnRequestDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ReturnRequest/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a return request
     * @param requestBody Return request Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ReturnRequestDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ReturnRequest/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}