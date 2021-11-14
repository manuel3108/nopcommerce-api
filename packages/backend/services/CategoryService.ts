/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryCategoryDtoPagedListDto } from '../models/CategoryCategoryDtoPagedListDto';
import type { CategoryDto } from '../models/CategoryDto';
import type { DiscountCategoryMappingDto } from '../models/DiscountCategoryMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * Gets all categories filtered by parent category identifier
     * @param parentCategoryId Parent category identifier
     * @param showHidden A value indicating whether to show hidden records
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetAllCategoriesByParentCategoryId(
parentCategoryId: number,
showHidden: boolean = false,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetAllCategoriesByParentCategoryId/${parentCategoryId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all categories displayed on the home page
     * @param showHidden A value indicating whether to show hidden records
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetAllCategoriesDisplayedOnHomepage(
showHidden: boolean = false,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetAllCategoriesDisplayedOnHomepage`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets child category identifiers
     * @param parentCategoryId Parent category identifier
     * @param storeId Store identifier; 0 if you want to get all records
     * @param showHidden A value indicating whether to show hidden records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetChildCategoryIds(
parentCategoryId: number,
storeId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetChildCategoryIds/${parentCategoryId}`,
            query: {
                'storeId': storeId,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get categories for which a discount is applied
     * @param discountId Discount identifier; pass null to load all records
     * @param showHidden A value indicating whether to load deleted categories
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns CategoryCategoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetCategoriesByAppliedDiscount(
discountId?: number,
showHidden: boolean = false,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<CategoryCategoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetCategoriesByAppliedDiscount`,
            query: {
                'discountId': discountId,
                'showHidden': showHidden,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a list of categories
     * @param ids Array of category identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static deleteDeleteCategories(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Category/DeleteCategories/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Returns a list of names of not existing categories
     * @param idsNames Array of names and/or IDs of the categories to check (separator - ;)
     * @returns string Success
     * @throws ApiError
     */
    public static getGetNotExistingCategories(
idsNames: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetNotExistingCategories/${idsNames}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets categories by identifier
     * @param ids Array of category identifiers (separator - ;)
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetCategoriesByIds(
ids: string,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetCategoriesByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get formatted category breadcrumb
     * @param categoryId Category identifier
     * @param separator Separator
     * @param languageId Language identifier for localization
     * @returns string Success
     * @throws ApiError
     */
    public static getGetFormattedBreadCrumb(
categoryId: number,
separator: string = '>>',
languageId?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetFormattedBreadCrumb/${categoryId}`,
            query: {
                'separator': separator,
                'languageId': languageId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get category breadcrumb
     * @param id Category id
     * @param showHidden A value indicating whether to load hidden records
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetCategoryBreadCrumb(
id: number,
showHidden: boolean = false,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetCategoryBreadCrumb/${id}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete category
     * @param id Category
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Category/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a category
     * @param id Category identifier
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CategoryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all categories
     * @param categoryName Category name
     * @param storeId Store identifier; 0 if you want to get all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @param overridePublished null - process "Published" property according to "showHidden" parameter
 * true - load only "Published" products
 * false - load only "Unpublished" products
     * @returns CategoryCategoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
categoryName: string,
storeId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
overridePublished?: boolean,
): CancelablePromise<CategoryCategoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetAll`,
            query: {
                'categoryName': categoryName,
                'storeId': storeId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
                'overridePublished': overridePublished,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts category
     * @param requestBody Category
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CategoryDto,
): CancelablePromise<CategoryDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Category/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the category
     * @param requestBody Category
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: CategoryDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Category/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Inserts a discount-category mapping record
     * @param requestBody Discount-category mapping
     * @returns any Success
     * @throws ApiError
     */
    public static postInsertDiscountCategoryMapping(
requestBody?: DiscountCategoryMappingDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/Category/InsertDiscountCategoryMapping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deletes a discount-category mapping record
     * @param id Discount-category mapping
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteDiscountCategoryMapping(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Category/DeleteDiscountCategoryMapping/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a discount-category mapping record
     * @param categoryId Category identifier
     * @param discountId Discount identifier
     * @returns DiscountCategoryMappingDto Success
     * @throws ApiError
     */
    public static getGetDiscountAppliedToCategory(
categoryId: number,
discountId: number,
): CancelablePromise<DiscountCategoryMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Category/GetDiscountAppliedToCategory/${categoryId}/${discountId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}