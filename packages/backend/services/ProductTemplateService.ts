/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductTemplateDto } from '../models/ProductTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductTemplateService {

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
            path: `/api-backend/ProductTemplate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductTemplateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductTemplateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTemplate/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ProductTemplateDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ProductTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductTemplate/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductTemplateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductTemplateDto,
): CancelablePromise<ProductTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductTemplate/Create`,
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
requestBody?: ProductTemplateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductTemplate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}