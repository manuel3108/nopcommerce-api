/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryDto } from '../models/CategoryDto';
import type { SpecificationAttributeDto } from '../models/SpecificationAttributeDto';
import type { SpecificationAttributeSpecificationAttributeDtoPagedListDto } from '../models/SpecificationAttributeSpecificationAttributeDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SpecificationAttributeService {

    /**
     * Gets specification attributes
     * @param ids The specification attribute identifiers
     * @returns CategoryDto Success
     * @throws ApiError
     */
    public static getGetSpecificationAttributeByIds(
ids: string,
): CancelablePromise<Array<CategoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/GetSpecificationAttributeByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets specification attributes
     * @returns SpecificationAttributeDto Success
     * @throws ApiError
     */
    public static getGetAllWithOptions(): CancelablePromise<Array<SpecificationAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/GetAllWithOptions`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets specification attributes by group identifier
     * @param groupId The specification attribute group identifier
     * @returns SpecificationAttributeDto Success
     * @throws ApiError
     */
    public static getGetAllByGroupId(
groupId?: number,
): CancelablePromise<Array<SpecificationAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/GetAllByGroupId`,
            query: {
                'groupId': groupId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deletes specifications attributes
     * @param ids Specification attributes id
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteSpecificationAttributes(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/DeleteSpecificationAttributes/${ids}`,
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
            path: `/api-backend/SpecificationAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns SpecificationAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<SpecificationAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets specification attributes
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns SpecificationAttributeSpecificationAttributeDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<SpecificationAttributeSpecificationAttributeDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SpecificationAttribute/GetAll`,
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
     * @param requestBody 
     * @returns SpecificationAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: SpecificationAttributeDto,
): CancelablePromise<SpecificationAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/SpecificationAttribute/Create`,
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
requestBody?: SpecificationAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/SpecificationAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}