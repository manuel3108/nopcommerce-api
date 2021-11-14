/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { ProductCategoryDto } from '../models/ProductCategoryDto';
import type { ProductProductTagMappingDto } from '../models/ProductProductTagMappingDto';
import type { ProductTagDto } from '../models/ProductTagDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductTagService {

    /**
     * Delete product tags
     * @param ids Array of product tag identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteProductTags(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/DeleteProductTags/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets product tags by identifier
     * @param ids Array of product tags identifiers (separator - ;)
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetCategoriesByIds(
ids: string,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetCategoriesByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all product tags by product identifier
     * @param productId Product identifier
     * @returns ProductCategoryDto Success
     * @throws ApiError
     */
    public static getGetAllProductTagsByProductId(
productId: number,
): CancelablePromise<Array<ProductCategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetAllProductTagsByProductId/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get products quantity linked to a passed tag identifier
     * @param productTagId Product tag identifier
     * @param storeId Store identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductCountByProductTagId(
productTagId: number,
storeId: number,
showHidden: boolean = false,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetProductCountByProductTagId/${productTagId}/${storeId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get product count for every linked tag
     * @param storeId Store identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductCount(
storeId: number,
showHidden: boolean = false,
): CancelablePromise<Record<string, number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetProductCount/${storeId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update product tags
     * @param productId Product id for update
     * @param productTags Array of product tags (separator - ;)
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateProductTags(
productId: number,
productTags: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/UpdateProductTags/${productId}/${productTags}`,
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
            path: `/api-backend/ProductTag/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductTagDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductTagDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all product tags
     * @param tagName Tag name
     * @returns ProductTagDto Success
     * @throws ApiError
     */
    public static getGetAll(
tagName?: string,
): CancelablePromise<Array<ProductTagDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTag/GetAll`,
            query: {
                'tagName': tagName,
            },
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
requestBody?: ProductTagDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductTag/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Inserts a product-product tag mapping
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postInsertProductProductTagMapping(
requestBody?: ProductProductTagMappingDto,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductTag/InsertProductProductTagMapping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}