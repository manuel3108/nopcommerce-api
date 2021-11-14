/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreDto } from '../models/StoreDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class StoreService {

    /**
     * Gets all stores
     * @returns StoreDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<StoreDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Store/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a store
     * @param id Store identifier
     * @returns StoreDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<StoreDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Store/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a store
     * @param requestBody Store Dto model
     * @returns StoreDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: StoreDto,
): CancelablePromise<StoreDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Store/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a store
     * @param requestBody Store Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: StoreDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Store/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a store
     * @param id Store identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Store/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Indicates whether a store contains a specified host
     * @param id Store identifier
     * @param host Host
     * @returns boolean Success
     * @throws ApiError
     */
    public static getContainsHostValue(
id: number,
host: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Store/ContainsHostValue/${id}`,
            query: {
                'host': host,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Returns a list of names of not existing stores
     * @param ids The names and/or IDs of the store to check (separator - ;)
     * @returns string Success
     * @throws ApiError
     */
    public static getGetNotExistingStores(
ids: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Store/GetNotExistingStores/${ids}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}