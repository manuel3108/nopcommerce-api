/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TierPriceDto } from '../models/TierPriceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TierPricesService {

    /**
     * Gets a product tier prices for customer
     * @param productId Product
     * @param customerId Customer
     * @param storeId Store identifier
     * @returns TierPriceDto Success
     * @throws ApiError
     */
    public static getGetTierPrices(
productId: number,
customerId: number,
storeId: number,
): CancelablePromise<Array<TierPriceDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/TierPrices/GetTierPrices/${productId}/${customerId}/${storeId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a tier prices by product identifier
     * @param productId Product identifier
     * @returns TierPriceDto Success
     * @throws ApiError
     */
    public static getGetTierPricesByProduct(
productId: number,
): CancelablePromise<Array<TierPriceDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/TierPrices/GetTierPricesByProduct/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a preferred tier price
     * @param productId Product
     * @param customerId Customer
     * @param storeId Store identifier
     * @param quantity Quantity
     * @returns TierPriceDto Success
     * @throws ApiError
     */
    public static getGetPreferredTierPrice(
productId: number,
customerId: number,
storeId: number,
quantity: number,
): CancelablePromise<TierPriceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/TierPrices/GetPreferredTierPrice/${productId}/${customerId}/${storeId}`,
            query: {
                'quantity': quantity,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
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
            path: `/api-backend/TierPrices/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns TierPriceDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<TierPriceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/TierPrices/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns TierPriceDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: TierPriceDto,
): CancelablePromise<TierPriceDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/TierPrices/Create`,
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
requestBody?: TierPriceDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/TierPrices/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}