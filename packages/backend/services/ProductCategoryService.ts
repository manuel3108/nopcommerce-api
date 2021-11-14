/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductCategoryDto } from '../models/ProductCategoryDto';
import type { ProductCategoryProductCategoryDtoPagedListDto } from '../models/ProductCategoryProductCategoryDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductCategoryService {

    /**
     * Gets product category mapping collection
     * @param categoryId Category identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductCategoryProductCategoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetProductCategoriesByCategoryId(
categoryId: number,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<ProductCategoryProductCategoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductCategory/GetProductCategoriesByCategoryId/${categoryId}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a product category mapping collection
     * @param productId Product identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductCategoryDto Success
     * @throws ApiError
     */
    public static getGetProductCategoriesByProductId(
productId: number,
showHidden: boolean = false,
): CancelablePromise<Array<ProductCategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductCategory/GetProductCategoriesByProductId/${productId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get category IDs for products
     * @param ids Array of Products Id (separator - ;)
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductCategoryIds(
ids: string,
): CancelablePromise<Record<string, Array<number>>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductCategory/GetProductCategoryIds/${ids}`,
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
            path: `/api-backend/ProductCategory/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductCategoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductCategoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductCategory/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductCategoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductCategoryDto,
): CancelablePromise<ProductCategoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductCategory/Create`,
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
requestBody?: ProductCategoryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductCategory/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}