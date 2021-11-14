/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordResult } from '../models/ChangePasswordResult';
import type { CustomerRegistrationResult } from '../models/CustomerRegistrationResult';
import type { PasswordFormat } from '../models/PasswordFormat';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerRegistrationService {

    /**
     * Validate customer
     * @param usernameOrEmail Username or email
     * @param password Password
     * @returns number Success
     * @throws ApiError
     */
    public static getValidateCustomer(
usernameOrEmail: string,
password: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRegistration/ValidateCustomer`,
            query: {
                'usernameOrEmail': usernameOrEmail,
                'password': password,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Register customer
     * @param customerId Customer Id
     * @param storeId Store identifier
     * @param email Email
     * @param username Username
     * @param password Password
     * @param passwordFormat Password format
     * @param isApproved Is approved
     * @returns CustomerRegistrationResult Success
     * @throws ApiError
     */
    public static postRegisterCustomer(
customerId: number,
storeId: number,
email: string,
username: string,
password: string,
passwordFormat: PasswordFormat,
isApproved: boolean,
): CancelablePromise<CustomerRegistrationResult> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerRegistration/RegisterCustomer/${storeId}/${customerId}`,
            query: {
                'email': email,
                'username': username,
                'password': password,
                'passwordFormat': passwordFormat,
                'isApproved': isApproved,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Change password
     * @param email Email
     * @param validateRequest A value indicating whether we should validate request
     * @param passwordFormat Password format
     * @param newPassword New password
     * @param oldPassword Old password
     * @param hashedPasswordFormat Hashed password format (e.g. SHA1, SHA512)
     * @returns ChangePasswordResult Success
     * @throws ApiError
     */
    public static putChangePassword(
email: string,
validateRequest: boolean,
passwordFormat: PasswordFormat,
newPassword: string,
oldPassword: string,
hashedPasswordFormat: string,
): CancelablePromise<ChangePasswordResult> {
        return __request({
            method: 'PUT',
            path: `/api-backend/CustomerRegistration/ChangePassword`,
            query: {
                'email': email,
                'validateRequest': validateRequest,
                'passwordFormat': passwordFormat,
                'newPassword': newPassword,
                'oldPassword': oldPassword,
                'hashedPasswordFormat': hashedPasswordFormat,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Sets a user email
     * @param customerId Customer
     * @param newEmail New email
     * @param requireValidation Require validation of new email address
     * @returns any Success
     * @throws ApiError
     */
    public static getSetEmail(
customerId: number,
newEmail: string,
requireValidation: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRegistration/SetEmail/${customerId}`,
            query: {
                'newEmail': newEmail,
                'requireValidation': requireValidation,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Sets a customer username
     * @param customerId Customer Id
     * @param newUsername New Username
     * @returns any Success
     * @throws ApiError
     */
    public static getSetUsername(
customerId: number,
newUsername: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerRegistration/SetUsername/${customerId}`,
            query: {
                'newUsername': newUsername,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}