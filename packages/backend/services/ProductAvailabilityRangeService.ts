/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAvailabilityRangeDto } from '../models/ProductAvailabilityRangeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAvailabilityRangeService {

    /**
     * Get all product availability ranges
     * @returns ProductAvailabilityRangeDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ProductAvailabilityRangeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAvailabilityRange/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get all product availability ranges
     * @param id The product availability range identifier
     * @returns ProductAvailabilityRangeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductAvailabilityRangeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAvailabilityRange/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a product availability range
     * @param requestBody Product availability range Dto model
     * @returns ProductAvailabilityRangeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductAvailabilityRangeDto,
): CancelablePromise<ProductAvailabilityRangeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAvailabilityRange/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a product availability range
     * @param requestBody Product availability range Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ProductAvailabilityRangeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductAvailabilityRange/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a product availability range
     * @param id Product availability range identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ProductAvailabilityRange/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}