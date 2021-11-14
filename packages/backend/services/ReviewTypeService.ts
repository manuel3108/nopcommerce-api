/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReviewTypeDto } from '../models/ReviewTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ReviewTypeService {

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
            path: `/api-backend/ReviewType/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ReviewTypeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ReviewTypeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ReviewType/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ReviewTypeDto Success
     * @throws ApiError
     */
    public static postGetAll(): CancelablePromise<Array<ReviewTypeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ReviewType/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ReviewTypeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ReviewTypeDto,
): CancelablePromise<ReviewTypeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ReviewType/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ReviewTypeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ReviewType/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}