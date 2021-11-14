/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductDto } from '../models/ProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RecentlyViewedProductsService {

    /**
     * Gets a "recently viewed products" list
     * @param number Number of products to load
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetRecentlyViewedProducts(
number: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/RecentlyViewedProducts/GetRecentlyViewedProducts`,
            query: {
                'number': number,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds a product to a recently viewed products list
     * @param productId Product identifier
     * @returns void 
     * @throws ApiError
     */
    public static getAddProductToRecentlyViewedList(
productId: number,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/RecentlyViewedProducts/AddProductToRecentlyViewedList/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}