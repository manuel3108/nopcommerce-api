/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountProductMappingDto } from '../models/DiscountProductMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductDiscountsService {

    /**
     * Clean up product references for a specified discount
     * @param discountId Discount identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getClearDiscountProductMapping(
discountId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductDiscounts/ClearDiscountProductMapping/${discountId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a discount-product mapping records by product identifier
     * @param productId Product identifier
     * @returns DiscountProductMappingDto Success
     * @throws ApiError
     */
    public static getGetAllDiscountsAppliedToProduct(
productId: number,
): CancelablePromise<Array<DiscountProductMappingDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductDiscounts/GetAllDiscountsAppliedToProduct/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a discount-product mapping record
     * @param productId Product identifier
     * @param discountId Discount identifier
     * @returns DiscountProductMappingDto Success
     * @throws ApiError
     */
    public static getGetDiscountAppliedToProduct(
productId: number,
discountId: number,
): CancelablePromise<DiscountProductMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductDiscounts/GetDiscountAppliedToProduct/${productId}/${discountId}`,
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
            path: `/api-backend/ProductDiscounts/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns DiscountProductMappingDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DiscountProductMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductDiscounts/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountProductMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountProductMappingDto,
): CancelablePromise<DiscountProductMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductDiscounts/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}