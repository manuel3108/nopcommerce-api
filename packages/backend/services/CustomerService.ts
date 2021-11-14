/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressDto } from '../models/AddressDto';
import type { CustomerCustomerDtoPagedListDto } from '../models/CustomerCustomerDtoPagedListDto';
import type { CustomerDto } from '../models/CustomerDto';
import type { ShoppingCartType } from '../models/ShoppingCartType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Gets online customers
     * @param ids A list of customer role identifiers (separator - ;) to filter by (at least one match); pass null or empty list in order to load all customers;
     * @param lastActivityFromUtc Customer last activity date (from)
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns CustomerCustomerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetOnlineCustomers(
ids: string,
lastActivityFromUtc: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<CustomerCustomerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetOnlineCustomers/${ids}`,
            query: {
                'lastActivityFromUtc': lastActivityFromUtc,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets customers with shopping carts
     * @param shoppingCartType Shopping cart type; pass null to load all records
     * @param storeId Store identifier; pass 0 to load all records
     * @param productId Product identifier; pass null to load all records
     * @param createdFromUtc Created date from (UTC); pass null to load all records
     * @param createdToUtc Created date to (UTC); pass null to load all records
     * @param countryId Billing country identifier; pass null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns CustomerCustomerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetCustomersWithShoppingCarts(
shoppingCartType?: ShoppingCartType,
storeId?: number,
productId?: number,
createdFromUtc?: string,
createdToUtc?: string,
countryId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<CustomerCustomerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomersWithShoppingCarts`,
            query: {
                'shoppingCartType': shoppingCartType,
                'storeId': storeId,
                'productId': productId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'countryId': countryId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get customers by identifiers
     * @param ids Array of customer identifiers (separator - ;)
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetCustomersByIds(
ids: string,
): CancelablePromise<Array<CustomerDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomersByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a customer by GUID
     * @param guid Customer GUID
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetCustomerByGuid(
guid: string,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerByGuid`,
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
     * Get customer by email
     * @param email Email
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetCustomerByEmail(
email: string,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerByEmail`,
            query: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get customer by system role
     * @param systemName System name
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetCustomerBySystemName(
systemName: string,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerBySystemName`,
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
     * Get customer by username
     * @param username Username
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetCustomerByUsername(
username: string,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerByUsername`,
            query: {
                'username': username,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Reset data required for checkout
     * @param customerId Customer
     * @param storeId Store identifier
     * @param clearCouponCodes A value indicating whether to clear coupon code
     * @param clearCheckoutAttributes A value indicating whether to clear selected checkout attributes
     * @param clearRewardPoints A value indicating whether to clear "Use reward points" flag
     * @param clearShippingMethod A value indicating whether to clear selected shipping method
     * @param clearPaymentMethod A value indicating whether to clear selected payment method
     * @returns any Success
     * @throws ApiError
     */
    public static getResetCheckoutData(
customerId: number,
storeId: number,
clearCouponCodes: boolean = false,
clearCheckoutAttributes: boolean = false,
clearRewardPoints: boolean = true,
clearShippingMethod: boolean = true,
clearPaymentMethod: boolean = true,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/ResetCheckoutData/${customerId}/${storeId}`,
            query: {
                'clearCouponCodes': clearCouponCodes,
                'clearCheckoutAttributes': clearCheckoutAttributes,
                'clearRewardPoints': clearRewardPoints,
                'clearShippingMethod': clearShippingMethod,
                'clearPaymentMethod': clearPaymentMethod,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete guest customer records
     * @param createdFromUtc 
     * @param createdToUtc 
     * @param onlyWithoutShoppingCart 
     * @returns number Success
     * @throws ApiError
     */
    public static getDeleteGuestCustomers(
createdFromUtc?: string,
createdToUtc?: string,
onlyWithoutShoppingCart?: boolean,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/DeleteGuestCustomers/onlyWithoutShoppingCart`,
            query: {
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'onlyWithoutShoppingCart': onlyWithoutShoppingCart,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a default tax display type (if configured)
     * @param customerId Customer Id
     * @returns number Success
     * @throws ApiError
     */
    public static getGetCustomerDefaultTaxDisplayType(
customerId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerDefaultTaxDisplayType/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get full name
     * @param customerId Customer Id
     * @returns string Success
     * @throws ApiError
     */
    public static getGetCustomerFullName(
customerId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerFullName/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the customer name
     * @param customerId Source
     * @param stripTooLong Strip too long customer name
     * @param maxLength Maximum customer name length
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatUsername(
customerId: number,
stripTooLong: boolean = false,
maxLength?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/FormatUsername/${customerId}`,
            query: {
                'stripTooLong': stripTooLong,
                'maxLength': maxLength,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets coupon codes
     * @param customerId Customer Id
     * @returns string Success
     * @throws ApiError
     */
    public static getParseAppliedDiscountCouponCodes(
customerId: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/ParseAppliedDiscountCouponCodes/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Adds a coupon code
     * @param customerId Customer Id
     * @param couponCode Coupon code
     * @returns any Success
     * @throws ApiError
     */
    public static getApplyDiscountCouponCode(
customerId: number,
couponCode: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/ApplyDiscountCouponCode/${customerId}`,
            query: {
                'couponCode': couponCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Removes a coupon code
     * @param customerId Customer Id
     * @param couponCode Coupon code to remove
     * @returns any Success
     * @throws ApiError
     */
    public static getRemoveDiscountCouponCode(
customerId: number,
couponCode: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/RemoveDiscountCouponCode/${customerId}`,
            query: {
                'couponCode': couponCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets coupon codes
     * @param customerId Customer Id
     * @returns string Success
     * @throws ApiError
     */
    public static getParseAppliedGiftCardCouponCodes(
customerId: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/ParseAppliedGiftCardCouponCodes/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Adds a coupon code
     * @param customerId Customer Id
     * @param couponCode Coupon code to remove
     * @returns any Success
     * @throws ApiError
     */
    public static getApplyGiftCardCouponCode(
customerId: number,
couponCode: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/ApplyGiftCardCouponCode/${customerId}`,
            query: {
                'couponCode': couponCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Removes a coupon code
     * @param customerId Customer Id
     * @param couponCode Coupon code to remove
     * @returns any Success
     * @throws ApiError
     */
    public static getRemoveGiftCardCouponCode(
customerId: number,
couponCode: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/RemoveGiftCardCouponCode/${customerId}`,
            query: {
                'couponCode': couponCode,
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
            path: `/api-backend/Customer/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all customers
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param affiliateId Affiliate identifier
     * @param vendorId Vendor identifier
     * @param customerRoleIds A list of customer role identifiers (separator - ;) to filter by (at least one match); pass null or empty list in order to load all customers;
     * @param email Email; null to load all customers
     * @param username Username; null to load all customers
     * @param firstName First name; null to load all customers
     * @param lastName Last name; null to load all customers
     * @param dayOfBirth Day of birth; 0 to load all customers
     * @param monthOfBirth Month of birth; 0 to load all customers
     * @param company Company; null to load all customers
     * @param phone Phone; null to load all customers
     * @param zipPostalCode Phone; null to load all customers
     * @param ipAddress IP address; null to load all customers
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param getOnlyTotalCount A value in indicating whether you want to load only total number of records. Set to "true" if you don't want to load data from database
     * @returns CustomerCustomerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
createdFromUtc?: string,
createdToUtc?: string,
affiliateId?: number,
vendorId?: number,
customerRoleIds?: string,
email?: string,
username?: string,
firstName?: string,
lastName?: string,
dayOfBirth?: number,
monthOfBirth?: number,
company?: string,
phone?: string,
zipPostalCode?: string,
ipAddress?: string,
pageIndex?: number,
pageSize: number = 2147483647,
getOnlyTotalCount: boolean = false,
): CancelablePromise<CustomerCustomerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetAll`,
            query: {
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'affiliateId': affiliateId,
                'vendorId': vendorId,
                'customerRoleIds': customerRoleIds,
                'email': email,
                'username': username,
                'firstName': firstName,
                'lastName': lastName,
                'dayOfBirth': dayOfBirth,
                'monthOfBirth': monthOfBirth,
                'company': company,
                'phone': phone,
                'zipPostalCode': zipPostalCode,
                'ipAddress': ipAddress,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'getOnlyTotalCount': getOnlyTotalCount,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CustomerDto,
): CancelablePromise<CustomerDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Customer/Create`,
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
requestBody?: CustomerDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Customer/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a list of addresses mapped to customer
     * @param customerId Customer identifier
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static getGetAddressesByCustomerId(
customerId: number,
): CancelablePromise<Array<AddressDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetAddressesByCustomerId/${customerId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a address mapped to customer
     * @param customerId Customer identifier
     * @param addressId Address identifier
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static getGetCustomerAddress(
customerId: number,
addressId: number,
): CancelablePromise<AddressDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerAddress/${customerId}/${addressId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a customer billing address
     * @param customerId Customer identifier
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static getGetCustomerBillingAddress(
customerId: number,
): CancelablePromise<AddressDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerBillingAddress/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a customer shipping address
     * @param customerId Customer identifier
     * @returns AddressDto Success
     * @throws ApiError
     */
    public static getGetCustomerShippingAddress(
customerId: number,
): CancelablePromise<AddressDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/GetCustomerShippingAddress/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Remove a customer-address mapping record
     * @param customerId Customer identifier
     * @param addressId Address identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getRemoveCustomerAddress(
customerId: number,
addressId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/RemoveCustomerAddress/${customerId}/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Inserts a customer-address mapping record
     * @param customerId Customer identifier
     * @param addressId Address identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getInsertCustomerAddress(
customerId: number,
addressId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Customer/InsertCustomerAddress/${customerId}/${addressId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}