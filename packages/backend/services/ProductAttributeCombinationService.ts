/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAttributeCombinationDto } from '../models/ProductAttributeCombinationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeCombinationService {

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
            path: `/api-backend/ProductAttributeCombination/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a product attribute combination by SKU
     * @param sku SKU
     * @returns ProductAttributeCombinationDto Success
     * @throws ApiError
     */
    public static getGetBySku(
sku: string,
): CancelablePromise<ProductAttributeCombinationDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeCombination/GetBySku`,
            query: {
                'sku': sku,
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
     * @returns ProductAttributeCombinationDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductAttributeCombinationDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeCombination/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param productId 
     * @returns ProductAttributeCombinationDto Success
     * @throws ApiError
     */
    public static getGetAll(
productId: number,
): CancelablePromise<Array<ProductAttributeCombinationDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeCombination/GetAll/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductAttributeCombinationDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductAttributeCombinationDto,
): CancelablePromise<ProductAttributeCombinationDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeCombination/Create`,
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
requestBody?: ProductAttributeCombinationDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductAttributeCombination/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}