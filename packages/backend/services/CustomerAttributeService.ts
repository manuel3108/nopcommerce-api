/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerAttributeDto } from '../models/CustomerAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerAttributeService {

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
            path: `/api-backend/CustomerAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CustomerAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CustomerAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all customer attributes
     * @returns CustomerAttributeDto Success
     * @throws ApiError
     */
    public static postGetAll(): CancelablePromise<Array<CustomerAttributeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttribute/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CustomerAttributeDto,
): CancelablePromise<CustomerAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttribute/Create`,
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
requestBody?: CustomerAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CustomerAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}