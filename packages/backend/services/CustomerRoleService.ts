/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerCustomerRoleMappingDto } from '../models/CustomerCustomerRoleMappingDto';
import type { CustomerRoleCustomerRoleDtoPagedListDto } from '../models/CustomerRoleCustomerRoleDtoPagedListDto';
import type { CustomerRoleDto } from '../models/CustomerRoleDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerRoleService {

    /**
     * Add a customer-customer role mapping
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postAddCustomerRoleMapping(
requestBody?: CustomerCustomerRoleMappingDto,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerRole/AddCustomerRoleMapping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Remove a customer-customer role mapping
     * @param customerId Customer Id
     * @param roleId Customer role Id
     * @returns string Success
     * @throws ApiError
     */
    public static getRemoveCustomerRoleMapping(
customerId: number,
roleId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/RemoveCustomerRoleMapping/${customerId}/${roleId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get customer role identifiers
     * @param customerId Customer Id
     * @param showHidden A value indicating whether to load hidden records
     * @returns string Success
     * @throws ApiError
     */
    public static getGetCustomerRoleIds(
customerId: number,
showHidden: boolean = false,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/GetCustomerRoleIds/${customerId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets list of customer roles
     * @param customerId Customer Id
     * @param showHidden A value indicating whether to load hidden records
     * @returns string Success
     * @throws ApiError
     */
    public static getGetCustomerRoles(
customerId: number,
showHidden: boolean = false,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/GetCustomerRoles/${customerId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is in a certain customer role
     * @param customerId Customer
     * @param customerRoleSystemName Customer role system name
     * @param onlyActiveCustomerRoles A value indicating whether we should look only in active customer roles
     * @returns string Success
     * @throws ApiError
     */
    public static getIsInCustomerRole(
customerId: number,
customerRoleSystemName: string,
onlyActiveCustomerRoles: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsInCustomerRole/${customerId}`,
            query: {
                'customerRoleSystemName': customerRoleSystemName,
                'onlyActiveCustomerRoles': onlyActiveCustomerRoles,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is administrator
     * @param customerId Customer Id
     * @param onlyActive A value indicating whether we should look only in active customer roles
     * @returns string Success
     * @throws ApiError
     */
    public static getIsAdmin(
customerId: number,
onlyActive: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsAdmin/${customerId}`,
            query: {
                'onlyActive': onlyActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is a forum moderator
     * @param customerId Customer Id
     * @param onlyActive A value indicating whether we should look only in active customer roles
     * @returns string Success
     * @throws ApiError
     */
    public static getIsForumModerator(
customerId: number,
onlyActive: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsForumModerator/${customerId}`,
            query: {
                'onlyActive': onlyActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is registered
     * @param customerId Customer Id
     * @param onlyActive A value indicating whether we should look only in active customer roles
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsRegistered(
customerId: number,
onlyActive: boolean = true,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsRegistered/${customerId}`,
            query: {
                'onlyActive': onlyActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is guest
     * @param customerId Customer Id
     * @param onlyActive A value indicating whether we should look only in active customer roles
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsGuest(
customerId: number,
onlyActive: boolean = true,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsGuest/${customerId}`,
            query: {
                'onlyActive': onlyActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer is vendor
     * @param customerId Customer Id
     * @param onlyActive A value indicating whether we should look only in active customer roles
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsVendor(
customerId: number,
onlyActive: boolean = true,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/IsVendor/${customerId}`,
            query: {
                'onlyActive': onlyActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

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
            path: `/api-backend/CustomerRole/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CustomerRoleDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CustomerRoleDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a customer role
     * @param systemName Customer role system name
     * @returns CustomerRoleDto Success
     * @throws ApiError
     */
    public static getGetCustomerRoleBySystemName(
systemName: string,
): CancelablePromise<CustomerRoleDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/GetCustomerRoleBySystemName`,
            query: {
                'systemName': systemName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all customer roles
     * @param showHidden A value indicating whether to show hidden records
     * @returns CustomerRoleCustomerRoleDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
showHidden: boolean = false,
): CancelablePromise<CustomerRoleCustomerRoleDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRole/GetAll`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerRoleDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CustomerRoleDto,
): CancelablePromise<CustomerRoleDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerRole/Create`,
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
requestBody?: CustomerRoleDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CustomerRole/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}