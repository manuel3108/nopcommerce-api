/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutAttributeDto } from '../models/CheckoutAttributeDto';
import type { CheckoutAttributeValueDto } from '../models/CheckoutAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CheckoutAttributeValueService {

    /**
     * Deletes a checkout attribute value
     * @param id Checkout attribute value identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/CheckoutAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets checkout attribute values by checkout attribute identifier
     * @param id Checkout attribute identifier
     * @returns CheckoutAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetByCheckoutAttributeId(
id: number,
): CancelablePromise<Array<CheckoutAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CheckoutAttributeValue/GetByCheckoutAttributeId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a checkout attribute value
     * @param id Checkout attribute value identifier
     * @returns CheckoutAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CheckoutAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CheckoutAttributeValue/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a checkout attribute value
     * @param requestBody Checkout attribute value Dto model
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CheckoutAttributeValueDto,
): CancelablePromise<CheckoutAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeValue/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a checkout attribute value
     * @param requestBody Checkout attribute value Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: CheckoutAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CheckoutAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}