/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductManufacturerDto } from '../models/ProductManufacturerDto';
import type { ProductManufacturerProductManufacturerDtoPagedListDto } from '../models/ProductManufacturerProductManufacturerDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductManufacturerService {

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
            path: `/api-backend/ProductManufacturer/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductManufacturerDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductManufacturerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductManufacturer/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a product manufacturer mapping collection
     * @param productId Product identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductManufacturerDto Success
     * @throws ApiError
     */
    public static getGetProductManufacturersByProductId(
productId: number,
showHidden: boolean = false,
): CancelablePromise<Array<ProductManufacturerDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductManufacturer/GetProductManufacturersByProductId/${productId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get manufacturer IDs for products
     * @param ids Array of Products Id (separator - ;)
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductManufacturerIds(
ids: string,
): CancelablePromise<Record<string, Array<number>>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductManufacturer/GetProductManufacturerIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets product manufacturer collection
     * @param manufacturerId Manufacturer identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductManufacturerProductManufacturerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetProductManufacturersByManufacturerId(
manufacturerId: number,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<ProductManufacturerProductManufacturerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductManufacturer/GetProductManufacturersByManufacturerId/${manufacturerId}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductManufacturerDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductManufacturerDto,
): CancelablePromise<ProductManufacturerDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductManufacturer/Create`,
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
requestBody?: ProductManufacturerDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductManufacturer/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}