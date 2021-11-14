/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StateProvinceDto } from '../models/StateProvinceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class StateProvinceService {

    /**
     * Gets a state/province by abbreviation
     * @param abbreviation The state/province abbreviation
     * @param countryId Country identifier; pass null to load the state regardless of a country
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static getGetStateProvinceByAbbreviation(
abbreviation: string,
countryId?: number,
): CancelablePromise<StateProvinceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/StateProvince/GetStateProvinceByAbbreviation`,
            query: {
                'abbreviation': abbreviation,
                'countryId': countryId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a state/province by address
     * @param addressId Address identifier
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static getGetStateProvinceByAddress(
addressId: number,
): CancelablePromise<StateProvinceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/StateProvince/GetStateProvinceByAddress/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a state/province collection by country identifier
     * @param countryId Country identifier
     * @param languageId Language identifier. It's used to sort states by localized names (if specified); pass 0 to skip it
     * @param showHidden A value indicating whether to show hidden records
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static getGetStateProvincesByCountryId(
countryId: number,
languageId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<StateProvinceDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/StateProvince/GetStateProvincesByCountryId/${countryId}`,
            query: {
                'languageId': languageId,
                'showHidden': showHidden,
            },
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
            path: `/api-backend/StateProvince/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<StateProvinceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/StateProvince/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all states/provinces
     * @param showHidden A value indicating whether to show hidden records
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static getGetAll(
showHidden: boolean = false,
): CancelablePromise<Array<StateProvinceDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/StateProvince/GetAll`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns StateProvinceDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: StateProvinceDto,
): CancelablePromise<StateProvinceDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/StateProvince/Create`,
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
requestBody?: StateProvinceDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/StateProvince/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}