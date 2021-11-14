/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReturnRequestActionDto } from '../models/ReturnRequestActionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ReturnRequestActionService {

    /**
     * Delete a return request action
     * @param id Return request action identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ReturnRequestAction/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all return request actions
     * @returns ReturnRequestActionDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ReturnRequestActionDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequestAction/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a return request action
     * @param id Return request action identifier
     * @returns ReturnRequestActionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ReturnRequestActionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReturnRequestAction/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a return request action
     * @param requestBody Return request action Dto model
     * @returns ReturnRequestActionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ReturnRequestActionDto,
): CancelablePromise<ReturnRequestActionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ReturnRequestAction/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a return request action
     * @param requestBody Return request action Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ReturnRequestActionDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ReturnRequestAction/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}