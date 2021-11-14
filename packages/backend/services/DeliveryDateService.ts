/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryDateDto } from '../models/DeliveryDateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DeliveryDateService {

    /**
     * Get all delivery dates
     * @returns DeliveryDateDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<DeliveryDateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/DeliveryDate/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a delivery date
     * @param id The delivery date identifier
     * @returns DeliveryDateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DeliveryDateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/DeliveryDate/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a delivery date
     * @param requestBody Delivery date Dto model
     * @returns DeliveryDateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DeliveryDateDto,
): CancelablePromise<DeliveryDateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/DeliveryDate/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a delivery date
     * @param requestBody Delivery date Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: DeliveryDateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/DeliveryDate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a delivery date
     * @param id Delivery date identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/DeliveryDate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}