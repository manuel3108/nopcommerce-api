/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountDto } from '../models/DiscountDto';
import type { DiscountType } from '../models/DiscountType';
import type { DiscountValidationResult } from '../models/DiscountValidationResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DiscountService {

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
            path: `/api-backend/Discount/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns DiscountDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DiscountDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Discount/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all discounts
     * @param discountType Discount type; pass null to load all records
     * @param couponCode Coupon code to find (exact match); pass null or empty to load all records
     * @param discountName Discount name; pass null or empty to load all records
     * @param showHidden A value indicating whether to show expired and not started discounts
     * @param startDateUtc Discount start date; pass null to load all records
     * @param endDateUtc Discount end date; pass null to load all records
     * @returns DiscountDto Success
     * @throws ApiError
     */
    public static getGetAll(
discountType?: DiscountType,
couponCode?: string,
discountName?: string,
showHidden: boolean = false,
startDateUtc?: string,
endDateUtc?: string,
): CancelablePromise<Array<DiscountDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Discount/GetAll`,
            query: {
                'discountType': discountType,
                'couponCode': couponCode,
                'discountName': discountName,
                'showHidden': showHidden,
                'startDateUtc': startDateUtc,
                'endDateUtc': endDateUtc,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountDto,
): CancelablePromise<DiscountDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Discount/Create`,
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
requestBody?: DiscountDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Discount/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate discount
     * @param discountId Discount
     * @param customerId Customer
     * @param couponCodesToValidate Coupon codes to validate(separator - ;)
     * @returns DiscountValidationResult Success
     * @throws ApiError
     */
    public static getValidateDiscount(
discountId: number,
customerId: number,
couponCodesToValidate: string,
): CancelablePromise<DiscountValidationResult> {
        return __request({
            method: 'GET',
            path: `/api-backend/Discount/ValidateDiscount/${discountId}/${customerId}`,
            query: {
                'couponCodesToValidate': couponCodesToValidate,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}