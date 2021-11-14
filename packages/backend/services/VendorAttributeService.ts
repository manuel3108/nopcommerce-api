/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorAttributeDto } from '../models/VendorAttributeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorAttributeService {

    /**
     * Gets all vendor attributes
     * @returns VendorAttributeDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<VendorAttributeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/VendorAttribute/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a vendor attributes by identifier
     * @param id The attribute identifier
     * @returns VendorAttributeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<VendorAttributeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/VendorAttribute/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a vendor attribute
     * @param requestBody Vendor attribute Dto
     * @returns VendorAttributeDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: VendorAttributeDto,
): CancelablePromise<VendorAttributeDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttribute/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the vendor attribute
     * @param requestBody Vendor attribute Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: VendorAttributeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/VendorAttribute/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a vendor attribute
     * @param id Vendor attribute identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/VendorAttribute/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}