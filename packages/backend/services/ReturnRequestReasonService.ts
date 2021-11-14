/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnRequestReasonDto } from '../models/ReturnRequestReasonDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ReturnRequestReasonService {

    /**
     * Delete a return request reasons
     * @param id Return request reasons identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ReturnRequestReason/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all return request reasons
     * @returns ReturnRequestReasonDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ReturnRequestReasonDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequestReason/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a return request reason
     * @param id Return request reason identifier
     * @returns ReturnRequestReasonDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ReturnRequestReasonDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequestReason/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a return request reason
     * @param requestBody Return request reason Dto model
     * @returns ReturnRequestReasonDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ReturnRequestReasonDto,
): CancelablePromise<ReturnRequestReasonDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ReturnRequestReason/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a return request reason
     * @param requestBody Return request reason Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ReturnRequestReasonDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ReturnRequestReason/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}