/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscountManufacturerMappingDto } from '../models/DiscountManufacturerMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DiscountManufacturerMappingService {

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
            path: `/api-backend/DiscountManufacturerMapping/Delete/${id}`,
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
     * @returns DiscountManufacturerMappingDto Success
     * @throws ApiError
     */
    public static getGetDiscountAppliedToManufacturer(
manufacturerId: number,
discountId: number,
): CancelablePromise<DiscountManufacturerMappingDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountManufacturerMapping/GetDiscountAppliedToManufacturer/${manufacturerId}/${discountId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns DiscountManufacturerMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DiscountManufacturerMappingDto,
): CancelablePromise<DiscountManufacturerMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/DiscountManufacturerMapping/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Clean up manufacturer references for a specified discount
     * @param discountId Discount Id
     * @returns any Success
     * @throws ApiError
     */
    public static getClearDiscountManufacturerMapping(
discountId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/DiscountManufacturerMapping/ClearDiscountManufacturerMapping/${discountId}`,
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
            path: `/api-backend/DiscountManufacturerMapping/GetAppliedManufacturerIds/${discountId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}