/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountCategoryMappingDto } from '../models/DiscountCategoryMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DiscountCategoryMappingService {

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
            path: `/api-backend/DiscountCategoryMapping/Delete/${id}`,
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
            path: `/api-backend/DiscountCategoryMapping/GetDiscountAppliedToCategory/${categoryId}/${discountId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountCategoryMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountCategoryMappingDto,
): CancelablePromise<DiscountCategoryMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/DiscountCategoryMapping/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Clean up category references for a specified discount
     * @param discountId Discount Id
     * @returns any Success
     * @throws ApiError
     */
    public static getClearDiscountCategoryMapping(
discountId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountCategoryMapping/ClearDiscountCategoryMapping/${discountId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get category identifiers to which a discount is applied
     * @param discountId Discount Id
     * @param customerId Customer Id
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAppliedCategoryIds(
discountId: number,
customerId: number,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountCategoryMapping/GetAppliedCategoryIds/${discountId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}