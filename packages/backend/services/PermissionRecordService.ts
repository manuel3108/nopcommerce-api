/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionRecordDto } from '../models/PermissionRecordDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PermissionRecordService {

    /**
     * Gets all permissions
     * @returns PermissionRecordDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<PermissionRecordDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/PermissionRecord/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a permission by Id
     * @param requestBody Permission record Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: PermissionRecordDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/PermissionRecord/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Authorize permission
     * @param systemName Permission record system name
     * @param customerRoleId Customer role identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getGetActiveSlug(
systemName: string,
customerRoleId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/PermissionRecord/GetActiveSlug/${customerRoleId}`,
            query: {
                'systemName': systemName,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}