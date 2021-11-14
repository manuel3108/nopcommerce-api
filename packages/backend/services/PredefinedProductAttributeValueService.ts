/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PredefinedProductAttributeValueDto } from '../models/PredefinedProductAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PredefinedProductAttributeValueService {

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
            path: `/api-backend/PredefinedProductAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns PredefinedProductAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<PredefinedProductAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PredefinedProductAttributeValue/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param productAttributeId 
     * @returns PredefinedProductAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetAll(
productAttributeId: number,
): CancelablePromise<Array<PredefinedProductAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/PredefinedProductAttributeValue/GetAll/${productAttributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns PredefinedProductAttributeValueDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PredefinedProductAttributeValueDto,
): CancelablePromise<PredefinedProductAttributeValueDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/PredefinedProductAttributeValue/Create`,
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
requestBody?: PredefinedProductAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/PredefinedProductAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}