/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductProductDtoPagedListDto } from '../models/ProductProductDtoPagedListDto';
import type { ProductSpecificationAttributeDto } from '../models/ProductSpecificationAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductSpecificationAttributeService {

    /**
     * Gets a count of product specification attribute mapping records
     * @param productId Product identifier; 0 to load all records
     * @param specificationAttributeOptionId The specification attribute option identifier; 0 to load all records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductSpecificationAttributeCount(
productId?: number,
specificationAttributeOptionId?: number,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductSpecificationAttribute/GetProductSpecificationAttributeCount`,
            query: {
                'productId': productId,
                'specificationAttributeOptionId': specificationAttributeOptionId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get mapped products for specification attribute
     * @param specificationAttributeId The specification attribute identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetProductsBySpecificationAttributeId(
specificationAttributeId: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductSpecificationAttribute/GetProductsBySpecificationAttributeId/${specificationAttributeId}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
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
            path: `/api-backend/ProductSpecificationAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductSpecificationAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductSpecificationAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductSpecificationAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a product specification attribute mapping collection
     * @param productId Product identifier; 0 to load all records
     * @param specificationAttributeOptionId Specification attribute option identifier; 0 to load all records
     * @param allowFiltering 0 to load attributes with AllowFiltering set to false, 1 to load attributes with AllowFiltering set to true, null to load all attributes
     * @param showOnProductPage 0 to load attributes with ShowOnProductPage set to false, 1 to load attributes with ShowOnProductPage set to true, null to load all attributes
     * @param specificationAttributeGroupId Specification attribute group identifier; 0 to load all records; null to load attributes without group
     * @returns ProductSpecificationAttributeDto Success
     * @throws ApiError
     */
    public static getGetAll(
productId?: number,
specificationAttributeOptionId?: number,
allowFiltering?: boolean,
showOnProductPage?: boolean,
specificationAttributeGroupId?: number,
): CancelablePromise<Array<ProductSpecificationAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductSpecificationAttribute/GetAll`,
            query: {
                'productId': productId,
                'specificationAttributeOptionId': specificationAttributeOptionId,
                'allowFiltering': allowFiltering,
                'showOnProductPage': showOnProductPage,
                'specificationAttributeGroupId': specificationAttributeGroupId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductSpecificationAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductSpecificationAttributeDto,
): CancelablePromise<ProductSpecificationAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductSpecificationAttribute/Create`,
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
requestBody?: ProductSpecificationAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductSpecificationAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}