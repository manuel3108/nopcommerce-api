/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerAttributeValueDto } from '../models/CustomerAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerAttributeValueService {

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
            path: `/api-backend/CustomerAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CustomerAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CustomerAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerAttributeValue/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets customer attribute values by customer attribute identifier
     * @param attributeId The customer attribute identifier
     * @returns CustomerAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetAll(
attributeId: number,
): CancelablePromise<Array<CustomerAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerAttributeValue/GetAll/${attributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerAttributeValueDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CustomerAttributeValueDto,
): CancelablePromise<CustomerAttributeValueDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttributeValue/Create`,
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
requestBody?: CustomerAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CustomerAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}