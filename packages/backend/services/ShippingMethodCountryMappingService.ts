/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingMethodCountryMappingDto } from '../models/ShippingMethodCountryMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShippingMethodCountryMappingService {

    /**
     * Gets shipping country mappings
     * @param requestBody Shipping country mapping Dto model
     * @returns ShippingMethodCountryMappingDto Success
     * @throws ApiError
     */
    public static postGet(
requestBody?: ShippingMethodCountryMappingDto,
): CancelablePromise<Array<ShippingMethodCountryMappingDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShippingMethodCountryMapping/Get`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a shipping country mapping
     * @param requestBody Shipping country mapping Dto model
     * @returns ShippingMethodCountryMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ShippingMethodCountryMappingDto,
): CancelablePromise<ShippingMethodCountryMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShippingMethodCountryMapping/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete the shipping country mapping
     * @param shippingMethodId The shipping method identifier
     * @param countryId Country identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
shippingMethodId: number,
countryId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ShippingMethodCountryMapping/Delete/${shippingMethodId}/${countryId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}