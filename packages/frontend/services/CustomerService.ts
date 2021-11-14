/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountActivationModelDto } from '../models/AccountActivationModelDto';
import type { AddressAddResponse } from '../models/AddressAddResponse';
import type { AddressEditResponse } from '../models/AddressEditResponse';
import type { ChangePasswordModelDto } from '../models/ChangePasswordModelDto';
import type { CheckGiftCardBalanceModelDto } from '../models/CheckGiftCardBalanceModelDto';
import type { CheckUsernameAvailabilityResponse } from '../models/CheckUsernameAvailabilityResponse';
import type { CustomerAddressEditModelDto } from '../models/CustomerAddressEditModelDto';
import type { CustomerAddressEditModelDtoBaseModelDtoRequest } from '../models/CustomerAddressEditModelDtoBaseModelDtoRequest';
import type { CustomerAddressListModelDto } from '../models/CustomerAddressListModelDto';
import type { CustomerAvatarModelDto } from '../models/CustomerAvatarModelDto';
import type { CustomerDownloadableProductsModelDto } from '../models/CustomerDownloadableProductsModelDto';
import type { CustomerInfoModelDto } from '../models/CustomerInfoModelDto';
import type { CustomerInfoModelDtoBaseModelDtoRequest } from '../models/CustomerInfoModelDtoBaseModelDtoRequest';
import type { EmailRevalidationModelDto } from '../models/EmailRevalidationModelDto';
import type { GdprToolsModelDto } from '../models/GdprToolsModelDto';
import type { InfoResponse } from '../models/InfoResponse';
import type { PasswordRecoveryConfirmModelDto } from '../models/PasswordRecoveryConfirmModelDto';
import type { PasswordRecoveryModelDto } from '../models/PasswordRecoveryModelDto';
import type { RegisterModelDto } from '../models/RegisterModelDto';
import type { RegisterModelDtoBaseModelDtoRequest } from '../models/RegisterModelDtoBaseModelDtoRequest';
import type { RegisterResultModelDto } from '../models/RegisterResultModelDto';
import type { UserAgreementModelDto } from '../models/UserAgreementModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Logout
     * @returns void 
     * @throws ApiError
     */
    public static getLogout(): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/Logout`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Prepare the password recovery model
     * @returns PasswordRecoveryModelDto Success
     * @throws ApiError
     */
    public static getPasswordRecovery(): CancelablePromise<PasswordRecoveryModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/PasswordRecovery`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Password recovery send
     * @param requestBody 
     * @returns PasswordRecoveryModelDto Success
     * @throws ApiError
     */
    public static postPasswordRecoverySend(
requestBody?: PasswordRecoveryModelDto,
): CancelablePromise<PasswordRecoveryModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/PasswordRecoverySend`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Password recovery confirm
     * @param token 
     * @param email 
     * @param customerGuid 
     * @returns PasswordRecoveryConfirmModelDto Success
     * @throws ApiError
     */
    public static postPasswordRecoveryConfirm(
token: string,
email: string,
customerGuid: string,
): CancelablePromise<PasswordRecoveryConfirmModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/PasswordRecoveryConfirm`,
            query: {
                'token': token,
                'email': email,
                'customerGuid': customerGuid,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Password recovery confirm post
     * @param token 
     * @param email 
     * @param customerGuid 
     * @param requestBody 
     * @returns PasswordRecoveryConfirmModelDto Success
     * @throws ApiError
     */
    public static postPasswordRecoveryConfirmPost(
token: string,
email: string,
customerGuid: string,
requestBody?: PasswordRecoveryConfirmModelDto,
): CancelablePromise<PasswordRecoveryConfirmModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/PasswordRecoveryConfirmPOST`,
            query: {
                'token': token,
                'email': email,
                'customerGuid': customerGuid,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the customer register model
     * @returns RegisterModelDto Success
     * @throws ApiError
     */
    public static getRegister(): CancelablePromise<RegisterModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/Register`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Register
     * @param returnUrl 
     * @param requestBody 
     * @returns RegisterModelDto Success
     * @throws ApiError
     */
    public static postRegister(
returnUrl: string,
requestBody?: RegisterModelDtoBaseModelDtoRequest,
): CancelablePromise<RegisterModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/Register`,
            query: {
                'returnUrl': returnUrl,
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
     * Prepare the register result model
     * @param resultId 
     * @param returnUrl 
     * @returns RegisterResultModelDto Success
     * @throws ApiError
     */
    public static postRegisterResult(
resultId: number,
returnUrl: string,
): CancelablePromise<RegisterResultModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/RegisterResult/${resultId}`,
            query: {
                'returnUrl': returnUrl,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Check Username availability
     * @param username Username
     * @returns CheckUsernameAvailabilityResponse Success
     * @throws ApiError
     */
    public static getCheckUsernameAvailability(
username: string,
): CancelablePromise<CheckUsernameAvailabilityResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/CheckUsernameAvailability`,
            query: {
                'username': username,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Account activation
     * @param token 
     * @param email 
     * @param customerGuid 
     * @returns AccountActivationModelDto Success
     * @throws ApiError
     */
    public static postAccountActivation(
token: string,
email: string,
customerGuid: string,
): CancelablePromise<AccountActivationModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/AccountActivation`,
            query: {
                'token': token,
                'email': email,
                'customerGuid': customerGuid,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the customer info model
     * @returns CustomerInfoModelDto Success
     * @throws ApiError
     */
    public static getInfo(): CancelablePromise<CustomerInfoModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/Info`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Customer info
     * @param requestBody 
     * @returns InfoResponse Success
     * @throws ApiError
     */
    public static postInfo(
requestBody?: CustomerInfoModelDtoBaseModelDtoRequest,
): CancelablePromise<InfoResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/Info`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete the external authentication record
     * @param id External authentication record identifier
     * @returns string Success
     * @throws ApiError
     */
    public static deleteRemoveExternalAssociation(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Customer/RemoveExternalAssociation/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Email revalidation
     * @param token 
     * @param email 
     * @param customerGuid 
     * @returns EmailRevalidationModelDto Success
     * @throws ApiError
     */
    public static postEmailRevalidation(
token: string,
email: string,
customerGuid: string,
): CancelablePromise<EmailRevalidationModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/EmailRevalidation`,
            query: {
                'token': token,
                'email': email,
                'customerGuid': customerGuid,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the customer address list model
     * @returns CustomerAddressListModelDto Success
     * @throws ApiError
     */
    public static getAddresses(): CancelablePromise<CustomerAddressListModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/Addresses`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Address delete
     * @param addressId Address identifier
     * @returns string Success
     * @throws ApiError
     */
    public static deleteAddressDelete(
addressId: number,
): CancelablePromise<string> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Customer/AddressDelete/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Prepare address model
     * @returns CustomerAddressEditModelDto Success
     * @throws ApiError
     */
    public static getAddressAdd(): CancelablePromise<CustomerAddressEditModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/AddressAdd`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Address add
     * @param requestBody 
     * @returns AddressAddResponse Success
     * @throws ApiError
     */
    public static postAddressAdd(
requestBody?: CustomerAddressEditModelDtoBaseModelDtoRequest,
): CancelablePromise<AddressAddResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/AddressAdd`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Prepare address model
     * @param addressId Address identifier
     * @returns CustomerAddressEditModelDto Success
     * @throws ApiError
     */
    public static getAddressEdit(
addressId: number,
): CancelablePromise<CustomerAddressEditModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/AddressEdit/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update address
     * @param addressId 
     * @param requestBody 
     * @returns AddressEditResponse Success
     * @throws ApiError
     */
    public static putAddressEdit(
addressId: number,
requestBody?: CustomerAddressEditModelDtoBaseModelDtoRequest,
): CancelablePromise<AddressEditResponse> {
        return __request({
            method: 'PUT',
            path: `/api-frontend/Customer/AddressEdit/${addressId}`,
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
     * Prepare the customer downloadable products model
     * @returns CustomerDownloadableProductsModelDto Success
     * @throws ApiError
     */
    public static getDownloadableProducts(): CancelablePromise<CustomerDownloadableProductsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/DownloadableProducts`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the user agreement model
     * @param orderItemId Order item guid identifier
     * @returns UserAgreementModelDto Success
     * @throws ApiError
     */
    public static getUserAgreement(
orderItemId: string,
): CancelablePromise<UserAgreementModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/UserAgreement`,
            query: {
                'orderItemId': orderItemId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the change password model
     * @returns ChangePasswordModelDto Success
     * @throws ApiError
     */
    public static getChangePassword(): CancelablePromise<ChangePasswordModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/ChangePassword`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Change password
     * @param requestBody 
     * @returns ChangePasswordModelDto Success
     * @throws ApiError
     */
    public static postChangePassword(
requestBody?: ChangePasswordModelDto,
): CancelablePromise<ChangePasswordModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/ChangePassword`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Prepare the customer avatar model
     * @returns CustomerAvatarModelDto Success
     * @throws ApiError
     */
    public static getAvatar(): CancelablePromise<CustomerAvatarModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/Avatar`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Upload avatar
     * @param fileName 
     * @param contentType 
     * @param requestBody 
     * @returns CustomerAvatarModelDto Success
     * @throws ApiError
     */
    public static postUploadAvatar(
fileName: string,
contentType: string,
requestBody?: string,
): CancelablePromise<CustomerAvatarModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/UploadAvatar`,
            query: {
                'fileName': fileName,
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
     * Remove avatar
     * @returns any Success
     * @throws ApiError
     */
    public static deleteRemoveAvatar(): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Customer/RemoveAvatar`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the GDPR tools model
     * @returns GdprToolsModelDto Success
     * @throws ApiError
     */
    public static getGdprTools(): CancelablePromise<GdprToolsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/GdprTools`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Export customer info (GDPR request) to XLSX
     * @returns void 
     * @throws ApiError
     */
    public static getGdprToolsExport(): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/GdprToolsExport`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gdpr tools delete
     * @returns GdprToolsModelDto Success
     * @throws ApiError
     */
    public static deleteGdprToolsDelete(): CancelablePromise<GdprToolsModelDto> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Customer/GdprToolsDelete`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the check gift card balance madel
     * @returns CheckGiftCardBalanceModelDto Success
     * @throws ApiError
     */
    public static getCheckGiftCardBalance(): CancelablePromise<CheckGiftCardBalanceModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Customer/CheckGiftCardBalance`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check GiftCard balance
     * @param requestBody 
     * @returns CheckGiftCardBalanceModelDto Success
     * @throws ApiError
     */
    public static postCheckBalance(
requestBody?: CheckGiftCardBalanceModelDto,
): CancelablePromise<CheckGiftCardBalanceModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Customer/CheckBalance`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}