/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDto } from '../models/AddressDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AddressService {

    /**
     * Gets total number of addresses by country identifier
     * @param countryId Country identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAddressTotalByCountryId(
countryId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Address/GetAddressTotalByCountryId/${countryId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets total number of addresses by state/province identifier
     * @param stateProvinceId State/province identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAddressTotalByStateProvinceId(
stateProvinceId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Address/GetAddressTotalByStateProvinceId/${stateProvinceId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether address is valid (can be saved)
     * @param requestBody Address to validate
     * @returns boolean Success
     * @throws ApiError
     */
    public static postIsAddressValid(
requestBody?: AddressDto,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/Address/IsAddressValid`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

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
            path: `/api-backend/Address/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<AddressDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Address/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: AddressDto,
): CancelablePromise<AddressDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Address/Create`,
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
requestBody?: AddressDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Address/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}