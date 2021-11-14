/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAttributeDto } from '../models/ProductAttributeDto';
import type { ProductAttributeProductAttributeDtoPagedListDto } from '../models/ProductAttributeProductAttributeDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeService {

    /**
     * Delete a list of product attributes
     * @param ids Array of product attribute identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteProductAttributes(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttribute/DeleteProductAttributes/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets product attributes
     * @param ids Array of product attribute identifiers (separator - ;)
     * @returns ProductAttributeDto Success
     * @throws ApiError
     */
    public static getGetProductAttributeByIds(
ids: string,
): CancelablePromise<Array<ProductAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttribute/GetProductAttributeByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Returns a list of IDs of not existing attributes
     * @param idsNames Array of IDs of the attributes to check
     * @returns string Success
     * @throws ApiError
     */
    public static getGetNotExistingAttributes(
idsNames: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttribute/GetNotExistingAttributes/${idsNames}`,
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
            path: `/api-backend/ProductAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all product attributes
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ProductAttributeProductAttributeDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ProductAttributeProductAttributeDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttribute/GetAll`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductAttributeDto,
): CancelablePromise<ProductAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttribute/Create`,
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
requestBody?: ProductAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}