/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { SpecificationAttributeOptionDto } from '../models/SpecificationAttributeOptionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SpecificationAttributeOptionService {

    /**
     * Get specification attribute options by identifiers
     * @param ids Identifiers
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetSpecificationAttributeOptionsByIds(
ids: string,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetSpecificationAttributeOptionsByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Returns a list of IDs of not existing specification attribute options
     * @param ids The IDs of the attribute options to check
     * @returns string Success
     * @throws ApiError
     */
    public static getGetNotExistingSpecificationAttributeOptions(
ids: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetNotExistingSpecificationAttributeOptions/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a specification attribute option by specification attribute id
     * @param specificationAttributeId The specification attribute identifier
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetSpecificationAttributeOptionsBySpecificationAttribute(
specificationAttributeId: number,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetSpecificationAttributeOptionsBySpecificationAttribute/${specificationAttributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets the filtrable specification attribute options by category id
     * @param categoryId The category id
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetFiltrableSpecificationAttributeOptionsByCategoryId(
categoryId: number,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetFiltrableSpecificationAttributeOptionsByCategoryId/${categoryId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets the filtrable specification attribute options by manufacturer id
     * @param manufacturerId The manufacturer id
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetFiltrableSpecificationAttributeOptionsByManufacturerId(
manufacturerId: number,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetFiltrableSpecificationAttributeOptionsByManufacturerId/${manufacturerId}`,
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
            path: `/api-backend/SpecificationAttributeOption/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns SpecificationAttributeOptionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<SpecificationAttributeOptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeOption/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SpecificationAttributeOptionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: SpecificationAttributeOptionDto,
): CancelablePromise<SpecificationAttributeOptionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/SpecificationAttributeOption/Create`,
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
requestBody?: SpecificationAttributeOptionDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/SpecificationAttributeOption/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}