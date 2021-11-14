/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionRecordCustomerRoleMappingDto } from '../models/PermissionRecordCustomerRoleMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PermissionRecordCustomerRoleMappingService {

    /**
     * Gets a permission record-customer role mapping
     * @param id Permission identifier
     * @returns PermissionRecordCustomerRoleMappingDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<Array<PermissionRecordCustomerRoleMappingDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/PermissionRecordCustomerRoleMapping/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a permission record-customer role mapping
     * @param requestBody Permission record-customer role mapping Dto model
     * @returns PermissionRecordCustomerRoleMappingDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PermissionRecordCustomerRoleMappingDto,
): CancelablePromise<PermissionRecordCustomerRoleMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/PermissionRecordCustomerRoleMapping/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a permission record-customer role mapping
     * @param permissionId Permission identifier
     * @param customerRoleId Customer role identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
permissionId: number,
customerRoleId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/PermissionRecordCustomerRoleMapping/Delete/${permissionId}/${customerRoleId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}