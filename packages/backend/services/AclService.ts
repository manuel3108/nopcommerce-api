/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AclRecordDto } from '../models/AclRecordDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AclService {

    /**
     * Deletes an ACL record
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Acl/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets ACL records
     * @param entityId 
     * @param entityTypeName 
     * @returns AclRecordDto Success
     * @throws ApiError
     */
    public static getGetAclRecords(
entityId: number,
entityTypeName: string,
): CancelablePromise<Array<AclRecordDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Acl/GetAclRecords/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts an ACL record
     * @param customerRoleId Customer role Id
     * @param entityId Entity Id
     * @param entityTypeName Entity type name
     * @returns any Success
     * @throws ApiError
     */
    public static postInsertAclRecord(
customerRoleId: number,
entityId: number,
entityTypeName: string,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/Acl/InsertAclRecord/${customerRoleId}/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Find customer role identifiers with granted access
     * @param entityId 
     * @param entityTypeName 
     * @returns number Success
     * @throws ApiError
     */
    public static getGetCustomerRoleIdsWithAccess(
entityId: number,
entityTypeName: string,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Acl/GetCustomerRoleIdsWithAccess/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Authorize ACL permission
     * @param customerId Customer Id
     * @param entityId Entity Id
     * @param entityTypeName Entity type name
     * @param subjectToAcl Is entity subject to ACL
     * @returns boolean Success
     * @throws ApiError
     */
    public static postAuthorize(
customerId: number,
entityId: number,
entityTypeName: string,
subjectToAcl: boolean,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/Acl/Authorize/${customerId}/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
                'subjectToAcl': subjectToAcl,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}