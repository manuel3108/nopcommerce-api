/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutAttributeDto } from '../models/CheckoutAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CheckoutAttributeService {

    /**
     * Deletes checkout attributes
     * @param ids Array of checkout attributes identifiers (separator - ;)
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteByIds(
ids: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/CheckoutAttribute/DeleteByIds/${ids}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all checkout attributes
     * @param storeId Store identifier
     * @param excludeShippableAttributes A value indicating whether we should exclude shippable attributes
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId?: number,
excludeShippableAttributes: boolean = false,
): CancelablePromise<Array<CheckoutAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CheckoutAttribute/GetAll`,
            query: {
                'storeId': storeId,
                'excludeShippableAttributes': excludeShippableAttributes,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a checkout attribute
     * @param id Checkout attribute identifier
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CheckoutAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CheckoutAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets checkout attributes
     * @param ids Array of checkout attribute identifiers (separator - ;)
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<CheckoutAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CheckoutAttribute/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a checkout attribute
     * @param requestBody Checkout attribute Dto model
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CheckoutAttributeDto,
): CancelablePromise<CheckoutAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttribute/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a checkout attribute
     * @param requestBody Checkout attribute Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: CheckoutAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CheckoutAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}