/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerPasswordDto } from '../models/CustomerPasswordDto';
import type { PasswordFormat } from '../models/PasswordFormat';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerPasswordService {

    /**
     * Get current customer password
     * @param customerId Customer identifier
     * @returns CustomerPasswordDto Success
     * @throws ApiError
     */
    public static getGetCurrentPassword(
customerId: number,
): CancelablePromise<CustomerPasswordDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerPassword/GetCurrentPassword/${customerId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether password recovery token is valid
     * @param customerId Customer Id
     * @param token Token to validate
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsPasswordRecoveryTokenValid(
customerId: number,
token: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerPassword/IsPasswordRecoveryTokenValid/${customerId}`,
            query: {
                'token': token,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether password recovery link is expired
     * @param customerId Customer Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsPasswordRecoveryLinkExpired(
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerPassword/IsPasswordRecoveryLinkExpired/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer password is expired
     * @param customerId Customer Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsPasswordExpired(
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerPassword/IsPasswordExpired/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets customer passwords
     * @param customerId Customer identifier; pass null to load all records
     * @param passwordFormat Password format; pass null to load all records
     * @param passwordsToReturn Number of returning passwords; pass null to load all records
     * @returns CustomerPasswordDto Success
     * @throws ApiError
     */
    public static getGetAll(
customerId?: number,
passwordFormat?: PasswordFormat,
passwordsToReturn?: number,
): CancelablePromise<Array<CustomerPasswordDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerPassword/GetAll`,
            query: {
                'customerId': customerId,
                'passwordFormat': passwordFormat,
                'passwordsToReturn': passwordsToReturn,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerPasswordDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CustomerPasswordDto,
): CancelablePromise<CustomerPasswordDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerPassword/Create`,
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
requestBody?: CustomerPasswordDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CustomerPassword/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}