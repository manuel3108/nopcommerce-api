/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAttributeValueDto } from '../models/ProductAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeValueService {

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
            path: `/api-backend/ProductAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeValue/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param mappingId 
     * @returns ProductAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetAll(
mappingId: number,
): CancelablePromise<Array<ProductAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeValue/GetAll/${mappingId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductAttributeValueDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductAttributeValueDto,
): CancelablePromise<ProductAttributeValueDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeValue/Create`,
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
requestBody?: ProductAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}