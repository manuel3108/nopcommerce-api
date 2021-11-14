/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAttributeMappingDto } from '../models/ProductAttributeMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeMappingService {

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
            path: `/api-backend/ProductAttributeMapping/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductAttributeMappingDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductAttributeMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeMapping/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param productId 
     * @returns ProductAttributeMappingDto Success
     * @throws ApiError
     */
    public static getGetAllByProductId(
productId: number,
): CancelablePromise<Array<ProductAttributeMappingDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeMapping/GetAllByProductId/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductAttributeMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductAttributeMappingDto,
): CancelablePromise<ProductAttributeMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeMapping/Create`,
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
requestBody?: ProductAttributeMappingDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductAttributeMapping/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}