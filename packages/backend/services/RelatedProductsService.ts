/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RelatedProductDto } from '../models/RelatedProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RelatedProductsService {

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
            path: `/api-backend/RelatedProducts/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns RelatedProductDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<RelatedProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/RelatedProducts/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets related products by product identifier
     * @param productId1 The first product identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns RelatedProductDto Success
     * @throws ApiError
     */
    public static getGetRelatedProductsByProductId1(
productId1: number,
showHidden: boolean = false,
): CancelablePromise<Array<RelatedProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/RelatedProducts/GetRelatedProductsByProductId1/${productId1}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns RelatedProductDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: RelatedProductDto,
): CancelablePromise<RelatedProductDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/RelatedProducts/Create`,
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
requestBody?: RelatedProductDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/RelatedProducts/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}