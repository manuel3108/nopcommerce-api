/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CrossSellProductDto } from '../models/CrossSellProductDto';
import type { ProductDto } from '../models/ProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CrossSellProductService {

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
            path: `/api-backend/CrossSellProduct/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CrossSellProductDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CrossSellProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CrossSellProduct/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets cross-sell products by product identifier
     * @param productId1 The first product identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns CrossSellProductDto Success
     * @throws ApiError
     */
    public static getGetCrossSellProductsByProductId1(
productId1: number,
showHidden: boolean = false,
): CancelablePromise<Array<CrossSellProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CrossSellProduct/GetCrossSellProductsByProductId1/${productId1}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a cross-sells
     * @param cart Array of Shopping cart item identifiers (separator - ;)
     * @param numberOfProducts Number of products to return
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetCrossSellProductsByShoppingCart(
cart: string,
numberOfProducts: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CrossSellProduct/GetCrossSellProductsByShoppingCart/${cart}`,
            query: {
                'numberOfProducts': numberOfProducts,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CrossSellProductDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CrossSellProductDto,
): CancelablePromise<CrossSellProductDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CrossSellProduct/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}