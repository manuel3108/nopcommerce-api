/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountCategoryMappingDto } from '../models/DiscountCategoryMappingDto';
import type { DiscountManufacturerMappingDto } from '../models/DiscountManufacturerMappingDto';
import type { ManufacturerDto } from '../models/ManufacturerDto';
import type { ManufacturerManufacturerDtoPagedListDto } from '../models/ManufacturerManufacturerDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ManufacturerService {

    /**
     * Gets the manufacturers by category identifier
     * @param categoryId Cateogry identifier
     * @returns ManufacturerDto Success
     * @throws ApiError
     */
    public static getGetManufacturersByCategoryId(
categoryId: number,
): CancelablePromise<Array<ManufacturerDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetManufacturersByCategoryId/${categoryId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets manufacturers by identifier
     * @param ids Array of manufacturer identifiers (separator - ;)
     * @returns ManufacturerDto Success
     * @throws ApiError
     */
    public static getGetManufacturersByIds(
ids: string,
): CancelablePromise<Array<ManufacturerDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetManufacturersByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get manufacturers for which a discount is applied
     * @param discountId Discount identifier; pass null to load all records
     * @param showHidden A value indicating whether to load deleted manufacturers
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ManufacturerManufacturerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetManufacturersWithAppliedDiscount(
discountId?: number,
showHidden: boolean = false,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ManufacturerManufacturerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetManufacturersWithAppliedDiscount`,
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
     * Returns a list of names of not existing manufacturers
     * @param idsNames The names and/or IDs of the manufacturers to check
     * @returns string Success
     * @throws ApiError
     */
    public static getGetNotExistingManufacturers(
idsNames: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetNotExistingManufacturers/${idsNames}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete manufacturers
     * @param ids Array of manufacturer identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteManufacturers(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/DeleteManufacturers/${ids}`,
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
            path: `/api-backend/Manufacturer/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ManufacturerDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ManufacturerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all manufacturers
     * @param manufacturerName Manufacturer name
     * @param storeId Store identifier; 0 if you want to get all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @param overridePublished null - process "Published" property according to "showHidden" parameter
 * true - load only "Published" products
 * false - load only "Unpublished" products
     * @returns ManufacturerManufacturerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
manufacturerName: string = '',
storeId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
overridePublished?: boolean,
): CancelablePromise<ManufacturerManufacturerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetAll`,
            query: {
                'manufacturerName': manufacturerName,
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
     * @param requestBody 
     * @returns ManufacturerDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ManufacturerDto,
): CancelablePromise<ManufacturerDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Manufacturer/Create`,
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
requestBody?: ManufacturerDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Manufacturer/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Clean up manufacturer references for a specified discount
     * @param discountId Discount Id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteClearDiscountManufacturerMapping(
discountId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Manufacturer/ClearDiscountManufacturerMapping/${discountId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Deletes a discount-manufacturer mapping record
     * @param mappingId Discount-manufacturer mapping Id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteDiscountManufacturerMapping(
mappingId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Manufacturer/DeleteDiscountManufacturerMapping/${mappingId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get manufacturer identifiers to which a discount is applied
     * @param discountId Discount Id
     * @param customerId Customer Id
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAppliedManufacturerIds(
discountId: number,
customerId: number,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetAppliedManufacturerIds/${discountId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a discount-manufacturer mapping record
     * @param manufacturerId Manufacturer identifier
     * @param discountId Discount identifier
     * @returns DiscountCategoryMappingDto Success
     * @throws ApiError
     */
    public static getGetDiscountAppliedToManufacturer(
manufacturerId: number,
discountId: number,
): CancelablePromise<DiscountCategoryMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Manufacturer/GetDiscountAppliedToManufacturer/${manufacturerId}/${discountId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts a discount-manufacturer mapping record
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postInsertDiscountManufacturerMapping(
requestBody?: DiscountManufacturerMappingDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/Manufacturer/InsertDiscountManufacturerMapping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}