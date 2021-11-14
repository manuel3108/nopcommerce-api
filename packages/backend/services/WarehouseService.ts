/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StoreDto } from '../models/StoreDto';
import type { WarehouseDto } from '../models/WarehouseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class WarehouseService {

    /**
     * Gets all warehouses
     * @param name Warehouse name
     * @returns WarehouseDto Success
     * @throws ApiError
     */
    public static getGetAll(
name?: string,
): CancelablePromise<Array<WarehouseDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Warehouse/GetAll`,
            query: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a warehouse
     * @param id The warehouse identifier
     * @returns WarehouseDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<WarehouseDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Warehouse/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a warehouse
     * @param requestBody Warehouse Dto model
     * @returns StoreDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: WarehouseDto,
): CancelablePromise<StoreDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Warehouse/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a warehouse
     * @param requestBody Warehouse Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: WarehouseDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Warehouse/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a warehouse
     * @param id Warehouse identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Warehouse/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get the nearest warehouse for the specified address
     * @param addressId Address
     * @param warehousesIds List of warehouses, if null all warehouses are used. (separator - ;)
     * @returns WarehouseDto Success
     * @throws ApiError
     */
    public static getGetNearestWarehouse(
addressId: number,
warehousesIds?: string,
): CancelablePromise<WarehouseDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Warehouse/GetNearestWarehouse/${addressId}`,
            query: {
                'warehousesIds': warehousesIds,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}