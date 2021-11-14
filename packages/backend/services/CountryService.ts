/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryDto } from '../models/CountryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CountryService {

    /**
     * Gets all countries
     * @param languageId Language identifier. It's used to sort countries by localized names (if specified); pass 0 to skip it
     * @param showHidden A value indicating whether to show hidden records
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetAllCountries(
languageId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<CountryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetAllCountries`,
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
     * Gets all countries that allow billing
     * @param languageId Language identifier. It's used to sort countries by localized names (if specified); pass 0 to skip it
     * @param showHidden A value indicating whether to show hidden records
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetAllCountriesForBilling(
languageId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<CountryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetAllCountriesForBilling`,
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
     * Gets all countries that allow shipping
     * @param languageId Language identifier. It's used to sort countries by localized names (if specified); pass 0 to skip it
     * @param showHidden A value indicating whether to show hidden records
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetAllCountriesForShipping(
languageId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<CountryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetAllCountriesForShipping`,
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
     * Gets a country by address
     * @param addressId Address identifier
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetCountryByAddress(
addressId: number,
): CancelablePromise<CountryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetCountryByAddress/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get countries by identifiers
     * @param ids Array of country identifiers (separator - ;)
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetCountriesByIds(
ids: string,
): CancelablePromise<Array<CountryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetCountriesByIds/${ids}`,
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
            path: `/api-backend/Country/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CountryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a country by two letter ISO code
     * @param twoLetterIsoCode Country two letter ISO code
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetCountryByTwoLetterIsoCode(
twoLetterIsoCode: string,
): CancelablePromise<CountryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetCountryByTwoLetterIsoCode`,
            query: {
                'twoLetterIsoCode': twoLetterIsoCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a country by three letter ISO code
     * @param threeLetterIsoCode Country three letter ISO code
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static getGetCountryByThreeLetterIsoCode(
threeLetterIsoCode: string,
): CancelablePromise<CountryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Country/GetCountryByThreeLetterIsoCode`,
            query: {
                'threeLetterIsoCode': threeLetterIsoCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CountryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CountryDto,
): CancelablePromise<CountryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Country/Create`,
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
requestBody?: CountryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Country/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}