/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressAttributeValueDto } from '../models/AddressAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AddressAttributeValueService {

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
            path: `/api-backend/AddressAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns AddressAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<AddressAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/AddressAttributeValue/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets address attribute values by address attribute identifier
     * @param addressAttributeId The address attribute identifier
     * @returns AddressAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetAll(
addressAttributeId: number,
): CancelablePromise<Array<AddressAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/AddressAttributeValue/GetAll/${addressAttributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns AddressAttributeValueDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: AddressAttributeValueDto,
): CancelablePromise<AddressAttributeValueDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeValue/Create`,
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
requestBody?: AddressAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/AddressAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}