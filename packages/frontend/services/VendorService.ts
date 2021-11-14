/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplyVendorModelDto } from '../models/ApplyVendorModelDto';
import type { ApplyVendorRequest } from '../models/ApplyVendorRequest';
import type { InfoRequest } from '../models/InfoRequest';
import type { VendorInfoModelDto } from '../models/VendorInfoModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorService {

    /**
     * @returns ApplyVendorModelDto Success
     * @throws ApiError
     */
    public static getApplyVendor(): CancelablePromise<ApplyVendorModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Vendor/ApplyVendor`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param contentType 
     * @param requestBody 
     * @returns ApplyVendorModelDto Success
     * @throws ApiError
     */
    public static postApplyVendorSubmit(
contentType: string,
requestBody?: ApplyVendorRequest,
): CancelablePromise<ApplyVendorModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Vendor/ApplyVendorSubmit`,
            query: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @returns VendorInfoModelDto Success
     * @throws ApiError
     */
    public static getInfo(): CancelablePromise<VendorInfoModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Vendor/Info`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param contentType 
     * @param requestBody 
     * @returns VendorInfoModelDto Success
     * @throws ApiError
     */
    public static postInfo(
contentType: string,
requestBody?: InfoRequest,
): CancelablePromise<VendorInfoModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Vendor/Info`,
            query: {
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static deleteRemovePicture(): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Vendor/RemovePicture`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}