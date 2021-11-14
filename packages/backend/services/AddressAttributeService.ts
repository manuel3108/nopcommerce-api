/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressAttributeDto } from '../models/AddressAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AddressAttributeService {

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
            path: `/api-backend/AddressAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns AddressAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<AddressAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/AddressAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all address attributes
     * @returns AddressAttributeDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<AddressAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/AddressAttribute/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns AddressAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: AddressAttributeDto,
): CancelablePromise<AddressAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttribute/Create`,
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
requestBody?: AddressAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/AddressAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}