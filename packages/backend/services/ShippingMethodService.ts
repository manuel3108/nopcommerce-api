/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingMethodDto } from '../models/ShippingMethodDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShippingMethodService {

    /**
     * Gets all shipping methods
     * @param filterByCountryId The country identifier to filter by
     * @returns ShippingMethodDto Success
     * @throws ApiError
     */
    public static getGetAll(
filterByCountryId?: number,
): CancelablePromise<Array<ShippingMethodDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingMethod/GetAll`,
            query: {
                'filterByCountryId': filterByCountryId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a shipping method
     * @param id The shipping method identifier
     * @returns ShippingMethodDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ShippingMethodDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingMethod/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a shipping method
     * @param requestBody Shipping method Dto model
     * @returns ShippingMethodDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ShippingMethodDto,
): CancelablePromise<ShippingMethodDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShippingMethod/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update the shipping method
     * @param requestBody Shipping method Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ShippingMethodDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ShippingMethod/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a shipping method
     * @param id The shipping method identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ShippingMethod/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Does country restriction exist
     * @param id Shipping method identifier
     * @param countryId Country identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCountryRestrictionExists(
id: number,
countryId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingMethod/CountryRestrictionExists/${id}/${countryId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}