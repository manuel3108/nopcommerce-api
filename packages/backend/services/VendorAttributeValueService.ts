/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorAttributeValueDto } from '../models/VendorAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorAttributeValueService {

    /**
     * Gets a vendor attribute value by identifier
     * @param id Vendor attribute value identifier
     * @returns VendorAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<VendorAttributeValueDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/VendorAttributeValue/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets vendor attribute values by vendor attribute identifier
     * @param id The vendor attribute identifier
     * @returns VendorAttributeValueDto Success
     * @throws ApiError
     */
    public static getGetByVendorAttributeId(
id: number,
): CancelablePromise<Array<VendorAttributeValueDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/VendorAttributeValue/GetByVendorAttributeId/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a vendor attribute value
     * @param requestBody Vendor attribute value Dto
     * @returns VendorAttributeValueDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: VendorAttributeValueDto,
): CancelablePromise<VendorAttributeValueDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeValue/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the vendor attribute value
     * @param requestBody Vendor attribute value Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: VendorAttributeValueDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/VendorAttributeValue/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a vendor attribute value
     * @param id Vendor attribute value identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/VendorAttributeValue/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}