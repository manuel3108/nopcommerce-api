/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManufacturerTemplateDto } from '../models/ManufacturerTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ManufacturerTemplateService {

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
            path: `/api-backend/ManufacturerTemplate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ManufacturerTemplateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ManufacturerTemplateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ManufacturerTemplate/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns ManufacturerTemplateDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ManufacturerTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ManufacturerTemplate/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ManufacturerTemplateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ManufacturerTemplateDto,
): CancelablePromise<ManufacturerTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ManufacturerTemplate/Create`,
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
requestBody?: ManufacturerTemplateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ManufacturerTemplate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}