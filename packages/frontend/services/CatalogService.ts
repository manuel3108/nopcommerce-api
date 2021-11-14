/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogProductsCommandDto } from '../models/CatalogProductsCommandDto';
import type { CategoryResponse } from '../models/CategoryResponse';
import type { CategorySimpleModelDto } from '../models/CategorySimpleModelDto';
import type { GetCategoryProductsResponse } from '../models/GetCategoryProductsResponse';
import type { GetManufacturerProductsResponse } from '../models/GetManufacturerProductsResponse';
import type { GetTagProductsResponse } from '../models/GetTagProductsResponse';
import type { GetVendorProductsResponse } from '../models/GetVendorProductsResponse';
import type { ManufacturerModelDto } from '../models/ManufacturerModelDto';
import type { ManufacturerResponse } from '../models/ManufacturerResponse';
import type { PopularProductTagsModelDto } from '../models/PopularProductTagsModelDto';
import type { ProductsByTagModelDto } from '../models/ProductsByTagModelDto';
import type { SearchModelDto } from '../models/SearchModelDto';
import type { SearchProductsResponse } from '../models/SearchProductsResponse';
import type { SearchRequest } from '../models/SearchRequest';
import type { SearchTermAutoCompleteResponse } from '../models/SearchTermAutoCompleteResponse';
import type { VendorModelDto } from '../models/VendorModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CatalogService {

    /**
     * Get category
     * @param categoryId 
     * @param requestBody 
     * @returns CategoryResponse Success
     * @throws ApiError
     */
    public static postGetCategory(
categoryId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<CategoryResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetCategory/${categoryId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get the category products
     * @param categoryId 
     * @param requestBody 
     * @returns GetCategoryProductsResponse Success
     * @throws ApiError
     */
    public static postGetCategoryProducts(
categoryId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<GetCategoryProductsResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetCategoryProducts/${categoryId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get catalog root (list of categories)
     * @returns CategorySimpleModelDto Success
     * @throws ApiError
     */
    public static getGetCatalogRoot(): CancelablePromise<Array<CategorySimpleModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/GetCatalogRoot`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get catalog sub categories
     * @param id Category identifier
     * @returns CategorySimpleModelDto Success
     * @throws ApiError
     */
    public static getGetCatalogSubCategories(
id: number,
): CancelablePromise<Array<CategorySimpleModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/GetCatalogSubCategories/${id}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get manufacturer
     * @param manufacturerId 
     * @param requestBody 
     * @returns ManufacturerResponse Success
     * @throws ApiError
     */
    public static postGetManufacturer(
manufacturerId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<ManufacturerResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetManufacturer/${manufacturerId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get manufacturer products
     * @param manufacturerId 
     * @param requestBody 
     * @returns GetManufacturerProductsResponse Success
     * @throws ApiError
     */
    public static postGetManufacturerProducts(
manufacturerId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<GetManufacturerProductsResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetManufacturerProducts/${manufacturerId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all manufacturers
     * @returns ManufacturerModelDto Success
     * @throws ApiError
     */
    public static getManufacturerAll(): CancelablePromise<Array<ManufacturerModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/ManufacturerAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Vendor
     * @param vendorId 
     * @param requestBody 
     * @returns VendorModelDto Success
     * @throws ApiError
     */
    public static postGetVendor(
vendorId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<VendorModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetVendor/${vendorId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get vendor products
     * @param vendorId 
     * @param requestBody 
     * @returns GetVendorProductsResponse Success
     * @throws ApiError
     */
    public static postGetVendorProducts(
vendorId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<GetVendorProductsResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetVendorProducts/${vendorId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all vendors
     * @returns VendorModelDto Success
     * @throws ApiError
     */
    public static getVendorAll(): CancelablePromise<Array<VendorModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/VendorAll`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get products by tag
     * @param productTagId 
     * @param requestBody 
     * @returns ProductsByTagModelDto Success
     * @throws ApiError
     */
    public static postGetProductsByTag(
productTagId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<ProductsByTagModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetProductsByTag/${productTagId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get tag products
     * @param productTagId 
     * @param requestBody 
     * @returns GetTagProductsResponse Success
     * @throws ApiError
     */
    public static postGetTagProducts(
productTagId: number,
requestBody?: CatalogProductsCommandDto,
): CancelablePromise<GetTagProductsResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/GetTagProducts/${productTagId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all popular product tags
     * @returns PopularProductTagsModelDto Success
     * @throws ApiError
     */
    public static getProductTagsAll(): CancelablePromise<PopularProductTagsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/ProductTagsAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Search
     * @param requestBody 
     * @returns SearchModelDto Success
     * @throws ApiError
     */
    public static postSearch(
requestBody?: SearchRequest,
): CancelablePromise<SearchModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/Search`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Search term auto complete
     * @param term 
     * @returns SearchTermAutoCompleteResponse Success
     * @throws ApiError
     */
    public static getSearchTermAutoComplete(
term: string,
): CancelablePromise<Array<SearchTermAutoCompleteResponse>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Catalog/SearchTermAutoComplete`,
            query: {
                'term': term,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Search products
     * @param requestBody 
     * @returns SearchProductsResponse Success
     * @throws ApiError
     */
    public static postSearchProducts(
requestBody?: SearchRequest,
): CancelablePromise<SearchProductsResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Catalog/SearchProducts`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}