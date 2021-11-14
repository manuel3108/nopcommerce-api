/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyCurrencyDtoPagedListDto } from '../models/CurrencyCurrencyDtoPagedListDto';
import type { CurrencyDto } from '../models/CurrencyDto';
import type { ExchangeRateDto } from '../models/ExchangeRateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CurrencyService {

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
            path: `/api-backend/Currency/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CurrencyDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CurrencyDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a currency by code
     * @param currencyCode Currency code
     * @returns CurrencyDto Success
     * @throws ApiError
     */
    public static getGetCurrencyByCode(
currencyCode: string,
): CancelablePromise<CurrencyDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/GetCurrencyByCode`,
            query: {
                'currencyCode': currencyCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all currencies
     * @param storeId Load records allowed only in a specified store; pass 0 to load all records
     * @param showHidden A value indicating whether to show hidden records
     * @returns CurrencyCurrencyDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId?: number,
showHidden: boolean = false,
): CancelablePromise<CurrencyCurrencyDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/GetAll`,
            query: {
                'storeId': storeId,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CurrencyDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CurrencyDto,
): CancelablePromise<CurrencyDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Currency/Create`,
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
requestBody?: CurrencyDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Currency/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets live rates regarding the passed currency
     * @param currencyCode Currency code; pass null to use primary exchange rate currency
     * @returns ExchangeRateDto Success
     * @throws ApiError
     */
    public static getGetCurrencyLiveRates(
currencyCode: string,
): CancelablePromise<Array<ExchangeRateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/GetCurrencyLiveRates`,
            query: {
                'currencyCode': currencyCode,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Converts currency
     * @param amount Amount
     * @param exchangeRate Currency exchange rate
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertCurrency(
amount: number,
exchangeRate: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertCurrency`,
            query: {
                'amount': amount,
                'exchangeRate': exchangeRate,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Converts to primary store currency
     * @param amount Amount
     * @param currencyId Source currency Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertToPrimaryStoreCurrency(
amount: number,
currencyId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertToPrimaryStoreCurrency/${currencyId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts from primary store currency
     * @param amount Amount
     * @param currencyId Target currency Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertFromPrimaryStoreCurrency(
amount: number,
currencyId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertFromPrimaryStoreCurrency/${currencyId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts currency
     * @param amount Amount
     * @param sourceCurrencyId Source currency code
     * @param targetCurrencyId Target currency code
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertCurrency1(
amount: number,
sourceCurrencyId: number,
targetCurrencyId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertCurrency/${sourceCurrencyId}/${targetCurrencyId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts to primary exchange rate currency
     * @param amount Amount
     * @param currencyId Source currency Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertToPrimaryExchangeRateCurrency(
amount: number,
currencyId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertToPrimaryExchangeRateCurrency/${currencyId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts from primary exchange rate currency
     * @param amount Amount
     * @param currencyId Target currency code
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertFromPrimaryExchangeRateCurrency(
amount: number,
currencyId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Currency/ConvertFromPrimaryExchangeRateCurrency/${currencyId}`,
            query: {
                'amount': amount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}