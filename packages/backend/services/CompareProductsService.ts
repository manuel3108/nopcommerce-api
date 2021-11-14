/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductDto } from '../models/ProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CompareProductsService {

    /**
     * Clears a "compare products" list
     * @returns void 
     * @throws ApiError
     */
    public static getClearCompareProducts(): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/CompareProducts/ClearCompareProducts`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a "compare products" list
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetComparedProducts(): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CompareProducts/GetComparedProducts`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Removes a product from a "compare products" list
     * @param productId Product identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getRemoveProductFromCompareList(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/CompareProducts/RemoveProductFromCompareList/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds a product to a "compare products" list
     * @param productId Product identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getAddProductToCompareList(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/CompareProducts/AddProductToCompareList/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}