/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductWarehouseInventoryDto } from '../models/ProductWarehouseInventoryDto';
import type { WarehouseDto } from '../models/WarehouseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductWarehouseService {

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
            path: `/api-backend/ProductWarehouse/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductWarehouseInventoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductWarehouseInventoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductWarehouse/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a warehouse by identifier
     * @param id Warehouse identifier
     * @returns WarehouseDto Success
     * @throws ApiError
     */
    public static getGetWarehousesById(
id: number,
): CancelablePromise<WarehouseDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductWarehouse/GetWarehousesById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a product warehouse-inventory records by product identifier
     * @param productId Product identifier
     * @returns ProductWarehouseInventoryDto Success
     * @throws ApiError
     */
    public static getGetAllProductWarehouseInventoryRecords(
productId: number,
): CancelablePromise<Array<ProductWarehouseInventoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductWarehouse/GetAllProductWarehouseInventoryRecords/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductWarehouseInventoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductWarehouseInventoryDto,
): CancelablePromise<ProductWarehouseInventoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductWarehouse/Create`,
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
requestBody?: ProductWarehouseInventoryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductWarehouse/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}