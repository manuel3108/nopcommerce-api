/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaxCategoryDto } from '../models/TaxCategoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TaxCategoryService {

    /**
     * Gets all tax categories
     * @returns TaxCategoryDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<TaxCategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/TaxCategory/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a tax category
     * @param id Tax category identifier
     * @returns TaxCategoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<TaxCategoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/TaxCategory/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a tax category
     * @param requestBody Tax category Dto model
     * @returns TaxCategoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: TaxCategoryDto,
): CancelablePromise<TaxCategoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/TaxCategory/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a tax category
     * @param requestBody Tax category Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: TaxCategoryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/TaxCategory/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a tax category
     * @param id Tax category identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/TaxCategory/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}