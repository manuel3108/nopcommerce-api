/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DownloadService {

    /**
     * Sample
     * @param productId Product identifier
     * @returns void 
     * @throws ApiError
     */
    public static getSample(
productId: number,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Download/Sample/${productId}`,
            errors: {
                302: `Redirect`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get download
     * @param orderItemGuid Order item GUID
     * @param agree Is agree
     * @returns void 
     * @throws ApiError
     */
    public static getGetDownload(
orderItemGuid: string,
agree: boolean = false,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Download/GetDownload`,
            query: {
                'orderItemGuid': orderItemGuid,
                'agree': agree,
            },
            errors: {
                302: `Redirect`,
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get license
     * @param orderItemGuid Orer item GUID
     * @returns void 
     * @throws ApiError
     */
    public static getGetLicense(
orderItemGuid: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Download/GetLicense`,
            query: {
                'orderItemGuid': orderItemGuid,
            },
            errors: {
                302: `Redirect`,
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get file upload
     * @param downloadGuid Download GUID
     * @returns void 
     * @throws ApiError
     */
    public static getGetFileUpload(
downloadGuid: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Download/GetFileUpload`,
            query: {
                'downloadGuid': downloadGuid,
            },
            errors: {
                302: `Redirect`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get order note file
     * @param orderNoteId Order note identifier
     * @returns void 
     * @throws ApiError
     */
    public static getGetOrderNoteFile(
orderNoteId: number,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Download/GetOrderNoteFile/${orderNoteId}`,
            errors: {
                302: `Redirect`,
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}