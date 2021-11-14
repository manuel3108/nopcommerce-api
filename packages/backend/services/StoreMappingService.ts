/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreMappingDto } from '../models/StoreMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class StoreMappingService {

    /**
     * Find store identifiers with granted access (mapped to the entity)
     * @param entityId 
     * @param entityTypeName 
     * @returns number Success
     * @throws ApiError
     */
    public static getGetStoresIdsWithAccess(
entityId: number,
entityTypeName: string,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/StoreMapping/GetStoresIdsWithAccess/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param storeId 
     * @param entityId 
     * @param entityTypeName 
     * @param subjectToAcl 
     * @returns boolean Success
     * @throws ApiError
     */
    public static postAuthorize(
storeId: number,
entityId: number,
entityTypeName: string,
subjectToAcl: boolean,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/StoreMapping/Authorize/${storeId}/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
                'subjectToAcl': subjectToAcl,
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
            path: `/api-backend/StoreMapping/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets store mapping records
     * @param entityId 
     * @param entityTypeName 
     * @returns StoreMappingDto Success
     * @throws ApiError
     */
    public static getGetStoreMappings(
entityId: number,
entityTypeName: string,
): CancelablePromise<Array<StoreMappingDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/StoreMapping/GetStoreMappings/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns StoreMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: StoreMappingDto,
): CancelablePromise<StoreMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/StoreMapping/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}