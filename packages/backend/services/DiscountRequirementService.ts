/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountRequirementDto } from '../models/DiscountRequirementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DiscountRequirementService {

    /**
     * @param id 
     * @param recursively 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
recursively: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/DiscountRequirement/Delete/${id}`,
            query: {
                'recursively': recursively,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns DiscountRequirementDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DiscountRequirementDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountRequirement/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets child discount requirements
     * @param discountRequirementId Parent discount requirement Id
     * @returns DiscountRequirementDto Success
     * @throws ApiError
     */
    public static getGetDiscountRequirementsByParent(
discountRequirementId: number,
): CancelablePromise<Array<DiscountRequirementDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountRequirement/GetDiscountRequirementsByParent/${discountRequirementId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get all discount requirements
     * @param discountId Discount identifier
     * @param topLevelOnly Whether to load top-level requirements only (without parent identifier)
     * @returns DiscountRequirementDto Success
     * @throws ApiError
     */
    public static getGetAll(
discountId?: number,
topLevelOnly: boolean = false,
): CancelablePromise<Array<DiscountRequirementDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountRequirement/GetAll`,
            query: {
                'discountId': discountId,
                'topLevelOnly': topLevelOnly,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountRequirementDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountRequirementDto,
): CancelablePromise<DiscountRequirementDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/DiscountRequirement/Create`,
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
requestBody?: DiscountRequirementDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/DiscountRequirement/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}