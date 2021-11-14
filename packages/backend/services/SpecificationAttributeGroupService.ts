/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SpecificationAttributeGroupDto } from '../models/SpecificationAttributeGroupDto';
import type { SpecificationAttributeGroupSpecificationAttributeGroupDtoPagedListDto } from '../models/SpecificationAttributeGroupSpecificationAttributeGroupDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SpecificationAttributeGroupService {

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
            path: `/api-backend/SpecificationAttributeGroup/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns SpecificationAttributeGroupDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<SpecificationAttributeGroupDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeGroup/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets specification attribute groups
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns SpecificationAttributeGroupSpecificationAttributeGroupDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<SpecificationAttributeGroupSpecificationAttributeGroupDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeGroup/GetAll`,
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
     * Gets product specification attribute groups
     * @param productId Product identifier
     * @returns SpecificationAttributeGroupDto Success
     * @throws ApiError
     */
    public static getGetProductSpecificationAttributeGroups(
productId: number,
): CancelablePromise<Array<SpecificationAttributeGroupDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttributeGroup/GetProductSpecificationAttributeGroups/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SpecificationAttributeGroupDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: SpecificationAttributeGroupDto,
): CancelablePromise<SpecificationAttributeGroupDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/SpecificationAttributeGroup/Create`,
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
requestBody?: SpecificationAttributeGroupDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/SpecificationAttributeGroup/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}