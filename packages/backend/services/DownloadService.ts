/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DownloadDto } from '../models/DownloadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class DownloadService {

    /**
     * Gets a download by identifier
     * @param id The download identifier
     * @returns DownloadDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<DownloadDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Download/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a download by GUID
     * @param guid The download GUID
     * @returns DownloadDto Success
     * @throws ApiError
     */
    public static getGetByGuid(
guid: string,
): CancelablePromise<DownloadDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Download/GetByGuid`,
            query: {
                'guid': guid,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a download
     * @param requestBody Download Dto model
     * @returns DownloadDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: DownloadDto,
): CancelablePromise<DownloadDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Download/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a download
     * @param id Download identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Download/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}