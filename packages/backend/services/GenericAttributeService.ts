/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericAttributeDto } from '../models/GenericAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GenericAttributeService {

    /**
     * Deletes an attributes
     * @param ids Array of attributes identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteAttributes(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/GenericAttribute/DeleteAttributes/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get attributes
     * @param entityId Entity identifier
     * @param keyGroup Key group
     * @returns GenericAttributeDto Success
     * @throws ApiError
     */
    public static getGetAttributesForEntity(
entityId: number,
keyGroup: string,
): CancelablePromise<Array<GenericAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GenericAttribute/GetAttributesForEntity/${entityId}`,
            query: {
                'keyGroup': keyGroup,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Save attribute value
     * @param storeId Store identifier; pass 0 if this attribute will be available for all stores
     * @param entityId Entity Id
     * @param entityTypeName Entity type name
     * @param key Key
     * @param value Value
     * @returns any Success
     * @throws ApiError
     */
    public static postSaveAttribute(
storeId: number,
entityId: number,
entityTypeName: string,
key: string,
value: string,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/GenericAttribute/SaveAttribute/${storeId}/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
                'key': key,
                'value': value,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get an attribute of an entity
     * @param entityId 
     * @param key 
     * @param entityTypeName 
     * @param storeId 
     * @param defaultValue 
     * @returns string Success
     * @throws ApiError
     */
    public static getGetAttribute(
entityId: number,
key: string,
entityTypeName: string,
storeId?: number,
defaultValue?: any,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/GenericAttribute/GetAttribute/${entityId}`,
            query: {
                'key': key,
                'entityTypeName': entityTypeName,
                'storeId': storeId,
                'defaultValue': defaultValue,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

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
            path: `/api-backend/GenericAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns GenericAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<GenericAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/GenericAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns GenericAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: GenericAttributeDto,
): CancelablePromise<GenericAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/GenericAttribute/Create`,
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
requestBody?: GenericAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/GenericAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}