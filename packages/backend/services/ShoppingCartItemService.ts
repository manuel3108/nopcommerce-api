/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetRecurringCycleInfoResponse } from '../models/GetRecurringCycleInfoResponse';
import type { GetSubTotalResponse } from '../models/GetSubTotalResponse';
import type { GetUnitPriceResponse } from '../models/GetUnitPriceResponse';
import type { ProductDto } from '../models/ProductDto';
import type { ShoppingCartItemDto } from '../models/ShoppingCartItemDto';
import type { ShoppingCartType } from '../models/ShoppingCartType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShoppingCartItemService {

    /**
     * Gets shopping cart
     * @param customerId Customer identifier
     * @param shoppingCartType Shopping cart type; pass null to load all records
     * @param storeId Store identifier; pass 0 to load all records
     * @param productId Product identifier; pass null to load all records
     * @param createdFromUtc Created date from (UTC); pass null to load all records
     * @param createdToUtc Created date to (UTC); pass null to load all records
     * @returns ShoppingCartItemDto Success
     * @throws ApiError
     */
    public static getGetShoppingCart(
customerId: number,
shoppingCartType?: ShoppingCartType,
storeId?: number,
productId?: number,
createdFromUtc?: string,
createdToUtc?: string,
): CancelablePromise<Array<ShoppingCartItemDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetShoppingCart/${customerId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'storeId': storeId,
                'productId': productId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete shopping cart item
     * @param id Shopping cart item identifier
     * @param resetCheckoutData A value indicating whether to reset checkout data
     * @param ensureOnlyActiveCheckoutAttributes A value indicating whether to ensure that only active checkout attributes are attached to the current customer
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
resetCheckoutData: boolean = true,
ensureOnlyActiveCheckoutAttributes: boolean = false,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ShoppingCartItem/Delete/${id}`,
            query: {
                'resetCheckoutData': resetCheckoutData,
                'ensureOnlyActiveCheckoutAttributes': ensureOnlyActiveCheckoutAttributes,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deletes expired shopping cart items
     * @param olderThanUtc Older than date and time
     * @returns void 
     * @throws ApiError
     */
    public static deleteDeleteExpired(
olderThanUtc: string,
): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ShoppingCartItem/DeleteExpired`,
            query: {
                'olderThanUtc': olderThanUtc,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Validates shopping cart item attributes
     * @param customerId Customer identifier
     * @param shoppingCartType Shopping cart type
     * @param productId Product identifier
     * @param quantity Quantity
     * @param ignoreNonCombinableAttributes A value indicating whether we should ignore non-combinable attributes
     * @param ignoreConditionMet A value indicating whether we should ignore filtering by "is condition met" property
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetShoppingCartItemAttributeWarnings(
customerId: number,
shoppingCartType: ShoppingCartType,
productId: number,
quantity: number = 1,
ignoreNonCombinableAttributes: boolean = false,
ignoreConditionMet: boolean = false,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/GetShoppingCartItemAttributeWarnings/${customerId}/${productId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'quantity': quantity,
                'ignoreNonCombinableAttributes': ignoreNonCombinableAttributes,
                'ignoreConditionMet': ignoreConditionMet,
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
     * Validates shopping cart item (gift card)
     * @param shoppingCartType Shopping cart type
     * @param productId Product identifier
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetShoppingCartItemGiftCardWarnings(
shoppingCartType: ShoppingCartType,
productId: number,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/GetShoppingCartItemGiftCardWarnings/${productId}`,
            query: {
                'shoppingCartType': shoppingCartType,
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
     * Validates shopping cart item for rental products
     * @param productId Product identifier
     * @param rentalStartDate Rental start date
     * @param rentalEndDate Rental end date
     * @returns string Success
     * @throws ApiError
     */
    public static getGetRentalProductWarnings(
productId: number,
rentalStartDate?: string,
rentalEndDate?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetRentalProductWarnings/${productId}`,
            query: {
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validates shopping cart item
     * @param customerId Customer
     * @param shoppingCartType Shopping cart type
     * @param productId Product
     * @param storeId Store identifier
     * @param customerEnteredPrice Customer entered price
     * @param rentalStartDate Rental start date
     * @param rentalEndDate Rental end date
     * @param quantity Quantity
     * @param addRequiredProducts Whether to add required products
     * @param shoppingCartItemId Shopping cart identifier; pass 0 if it's a new item
     * @param getStandardWarnings A value indicating whether we should validate a product for standard properties
     * @param getAttributesWarnings A value indicating whether we should validate product attributes
     * @param getGiftCardWarnings A value indicating whether we should validate gift card properties
     * @param getRequiredProductWarnings A value indicating whether we should validate required products (products which require other products to be added to the cart)
     * @param getRentalWarnings A value indicating whether we should validate rental properties
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetShoppingCartItemWarnings(
customerId: number,
shoppingCartType: ShoppingCartType,
productId: number,
storeId: number,
customerEnteredPrice: number,
rentalStartDate?: string,
rentalEndDate?: string,
quantity: number = 1,
addRequiredProducts: boolean = true,
shoppingCartItemId?: number,
getStandardWarnings: boolean = true,
getAttributesWarnings: boolean = true,
getGiftCardWarnings: boolean = true,
getRequiredProductWarnings: boolean = true,
getRentalWarnings: boolean = true,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/GetShoppingCartItemWarnings/${customerId}/${productId}/${storeId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'customerEnteredPrice': customerEnteredPrice,
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
                'quantity': quantity,
                'addRequiredProducts': addRequiredProducts,
                'shoppingCartItemId': shoppingCartItemId,
                'getStandardWarnings': getStandardWarnings,
                'getAttributesWarnings': getAttributesWarnings,
                'getGiftCardWarnings': getGiftCardWarnings,
                'getRequiredProductWarnings': getRequiredProductWarnings,
                'getRentalWarnings': getRentalWarnings,
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
     * Add a product to shopping cart
     * @param customerId Customer
     * @param productId Product
     * @param shoppingCartType Shopping cart type
     * @param storeId Store identifier
     * @param customerEnteredPrice The price enter by a customer
     * @param rentalStartDate Rental start date
     * @param rentalEndDate Rental end date
     * @param quantity Quantity
     * @param addRequiredProducts Whether to add required products
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddToCart(
customerId: number,
productId: number,
shoppingCartType: ShoppingCartType,
storeId: number,
customerEnteredPrice?: number,
rentalStartDate?: string,
rentalEndDate?: string,
quantity: number = 1,
addRequiredProducts: boolean = true,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/AddToCart/${customerId}/${productId}/${storeId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'customerEnteredPrice': customerEnteredPrice,
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
                'quantity': quantity,
                'addRequiredProducts': addRequiredProducts,
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
     * Updates the shopping cart item
     * @param customerId Customer
     * @param shoppingCartItemId Shopping cart item identifier
     * @param customerEnteredPrice New customer entered price
     * @param rentalStartDate Rental start date
     * @param rentalEndDate Rental end date
     * @param quantity New shopping cart item quantity
     * @param resetCheckoutData A value indicating whether to reset checkout data
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postUpdateShoppingCartItem(
customerId: number,
shoppingCartItemId: number,
customerEnteredPrice: number,
rentalStartDate?: string,
rentalEndDate?: string,
quantity: number = 1,
resetCheckoutData: boolean = true,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/UpdateShoppingCartItem/${customerId}/${shoppingCartItemId}`,
            query: {
                'customerEnteredPrice': customerEnteredPrice,
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
                'quantity': quantity,
                'resetCheckoutData': resetCheckoutData,
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
     * Migrate shopping cart
     * @param fromCustomerId From customer
     * @param toCustomerId To customer
     * @param includeCouponCodes A value indicating whether to coupon codes (discount and gift card) should be also re-applied
     * @returns any Success
     * @throws ApiError
     */
    public static getMigrateShoppingCart(
fromCustomerId: number,
toCustomerId: number,
includeCouponCodes: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/MigrateShoppingCart/${fromCustomerId}/${toCustomerId}`,
            query: {
                'includeCouponCodes': includeCouponCodes,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets shopping cart shipping total
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param productId Product identifier
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductsRequiringProduct(
cartItemIds: string,
productId: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetProductsRequiringProduct/${cartItemIds}/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validates whether this shopping cart is valid
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @param validateCheckoutAttributes A value indicating whether to validate checkout attributes
     * @param requestBody Checkout attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetShoppingCartWarnings(
cartItemIds: string,
validateCheckoutAttributes: boolean,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/GetShoppingCartWarnings/${cartItemIds}`,
            query: {
                'validateCheckoutAttributes': validateCheckoutAttributes,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets the shopping cart item sub total
     * @param cartItemId Cart item identifier
     * @param includeDiscounts A value indicating whether include discounts or not for price computation
     * @returns GetSubTotalResponse Success
     * @throws ApiError
     */
    public static getGetSubTotal(
cartItemId: number,
includeDiscounts: boolean,
): CancelablePromise<GetSubTotalResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetSubTotal/${cartItemId}`,
            query: {
                'includeDiscounts': includeDiscounts,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the shopping cart item sub total
     * @param cartItemId Cart item identifier
     * @param includeDiscounts A value indicating whether include discounts or not for price computation
     * @returns GetUnitPriceResponse Success
     * @throws ApiError
     */
    public static getGetUnitPrice(
cartItemId: number,
includeDiscounts: boolean,
): CancelablePromise<GetUnitPriceResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetUnitPrice/${cartItemId}`,
            query: {
                'includeDiscounts': includeDiscounts,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Finds a shopping cart item in the cart
     * @param cartItemIds Shopping cart ids (separator - ;)
     * @param shoppingCartType Shopping cart type (Shopping cart - 1, Wishlist - 2)
     * @param productId Product
     * @param customerEnteredPrice Price entered by a customer
     * @param rentalStartDate Rental start date
     * @param rentalEndDate Rental end date
     * @param requestBody Attributes in XML format
     * @returns ShoppingCartItemDto Success
     * @throws ApiError
     */
    public static postFindShoppingCartItemInTheCart(
cartItemIds: string,
shoppingCartType: ShoppingCartType,
productId: number,
customerEnteredPrice?: number,
rentalStartDate?: string,
rentalEndDate?: string,
requestBody?: string,
): CancelablePromise<ShoppingCartItemDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShoppingCartItem/FindShoppingCartItemInTheCart/${cartItemIds}/${productId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'customerEnteredPrice': customerEnteredPrice,
                'rentalStartDate': rentalStartDate,
                'rentalEndDate': rentalEndDate,
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
     * Indicates whether the shopping cart requires shipping
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getShoppingCartRequiresShipping(
cartItemIds: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/ShoppingCartRequiresShipping/${cartItemIds}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether shopping cart is recurring
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getShoppingCartIsRecurring(
cartItemIds: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/ShoppingCartIsRecurring/${cartItemIds}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a recurring cycle information
     * @param cartItemIds Cart item identifiers (separator - ;)
     * @returns GetRecurringCycleInfoResponse Success
     * @throws ApiError
     */
    public static getGetRecurringCycleInfo(
cartItemIds: string,
): CancelablePromise<GetRecurringCycleInfoResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShoppingCartItem/GetRecurringCycleInfo/${cartItemIds}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}