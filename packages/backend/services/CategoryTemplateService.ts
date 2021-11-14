/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryTemplateDto } from '../models/CategoryTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CategoryTemplateService {

    /**
     * Delete category template
     * @param id Category template identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/CategoryTemplate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a category template
     * @param id Category template identifier
     * @returns CategoryTemplateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CategoryTemplateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CategoryTemplate/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all category templates
     * @returns CategoryTemplateDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<CategoryTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CategoryTemplate/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts category template
     * @param requestBody Category template
     * @returns CategoryTemplateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CategoryTemplateDto,
): CancelablePromise<CategoryTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CategoryTemplate/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the category template
     * @param requestBody Category template
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: CategoryTemplateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CategoryTemplate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}