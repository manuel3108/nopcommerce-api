/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProductToCartResponse } from '../models/AddProductToCartResponse';
import type { CheckoutAttributeChangeResponse } from '../models/CheckoutAttributeChangeResponse';
import type { EstimateShippingModelDtoBaseModelDtoRequest } from '../models/EstimateShippingModelDtoBaseModelDtoRequest';
import type { EstimateShippingResultModelDto } from '../models/EstimateShippingResultModelDto';
import type { MiniShoppingCartModelDto } from '../models/MiniShoppingCartModelDto';
import type { ProductDetailsAttributeChangeResponse } from '../models/ProductDetailsAttributeChangeResponse';
import type { SelectShippingOptionResponse } from '../models/SelectShippingOptionResponse';
import type { ShoppingCartModelDto } from '../models/ShoppingCartModelDto';
import type { ShoppingCartType } from '../models/ShoppingCartType';
import type { UploadFileCheckoutAttributeResponse } from '../models/UploadFileCheckoutAttributeResponse';
import type { UploadFileProductAttributeResponse } from '../models/UploadFileProductAttributeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShoppingCartService {

    /**
     * @param name 
     * @param requestBody 
     * @returns SelectShippingOptionResponse Success
     * @throws ApiError
     */
    public static postSelectShippingOption(
name: string,
requestBody?: EstimateShippingModelDtoBaseModelDtoRequest,
): CancelablePromise<SelectShippingOptionResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/SelectShippingOption`,
            query: {
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param productId 
     * @param shoppingCartType 
     * @param quantity 
     * @returns AddProductToCartResponse Success
     * @throws ApiError
     */
    public static postAddProductToCartFromCatalog(
productId: number,
shoppingCartType: ShoppingCartType,
quantity: number,
): CancelablePromise<AddProductToCartResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/AddProductToCartFromCatalog/${productId}`,
            query: {
                'shoppingCartType': shoppingCartType,
                'quantity': quantity,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param productId 
     * @param shoppingCartType 
     * @param requestBody 
     * @returns AddProductToCartResponse Success
     * @throws ApiError
     */
    public static postAddProductToCartFromDetails(
productId: number,
shoppingCartType: ShoppingCartType,
requestBody?: Record<string, string>,
): CancelablePromise<AddProductToCartResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/AddProductToCartFromDetails/${productId}`,
            query: {
                'shoppingCartType': shoppingCartType,
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
     * @param productId 
     * @param validateAttributeConditions 
     * @param loadPicture 
     * @param requestBody 
     * @returns ProductDetailsAttributeChangeResponse Success
     * @throws ApiError
     */
    public static putProductDetailsAttributeChange(
productId: number,
validateAttributeConditions: boolean,
loadPicture: boolean,
requestBody?: Record<string, string>,
): CancelablePromise<ProductDetailsAttributeChangeResponse> {
        return __request({
            method: 'PUT',
            path: `/api-frontend/ShoppingCart/ProductDetailsAttributeChange/${productId}`,
            query: {
                'validateAttributeConditions': validateAttributeConditions,
                'loadPicture': loadPicture,
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
     * @param requestBody 
     * @returns CheckoutAttributeChangeResponse Success
     * @throws ApiError
     */
    public static postCheckoutAttributeChange(
requestBody?: Record<string, string>,
): CancelablePromise<CheckoutAttributeChangeResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/CheckoutAttributeChange`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param attributeId 
     * @returns UploadFileProductAttributeResponse Success
     * @throws ApiError
     */
    public static postUploadFileProductAttribute(
attributeId: number,
): CancelablePromise<UploadFileProductAttributeResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/UploadFileProductAttribute/${attributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param attributeId 
     * @returns UploadFileCheckoutAttributeResponse Success
     * @throws ApiError
     */
    public static postUploadFileCheckoutAttribute(
attributeId: number,
): CancelablePromise<UploadFileCheckoutAttributeResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/UploadFileCheckoutAttribute/${attributeId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static getCart(): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/ShoppingCart/Cart`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @returns MiniShoppingCartModelDto Success
     * @throws ApiError
     */
    public static getMiniCart(): CancelablePromise<MiniShoppingCartModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/ShoppingCart/MiniCart`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static postUpdateCart(
requestBody?: Record<string, string>,
): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/UpdateCart`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param discountCouponCode 
     * @param requestBody 
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static postApplyDiscountCoupon(
discountCouponCode: string,
requestBody?: Record<string, string>,
): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/ApplyDiscountCoupon`,
            query: {
                'discountCouponCode': discountCouponCode,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param giftCardCouponCode 
     * @param requestBody 
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static postApplyGiftCard(
giftCardCouponCode: string,
requestBody?: Record<string, string>,
): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/ApplyGiftCard`,
            query: {
                'giftCardCouponCode': giftCardCouponCode,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns EstimateShippingResultModelDto Success
     * @throws ApiError
     */
    public static postGetEstimateShipping(
requestBody?: EstimateShippingModelDtoBaseModelDtoRequest,
): CancelablePromise<EstimateShippingResultModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/GetEstimateShipping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static postRemoveDiscountCoupon(
requestBody?: Record<string, string>,
): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/RemoveDiscountCoupon`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ShoppingCartModelDto Success
     * @throws ApiError
     */
    public static postRemoveGiftCardCode(
requestBody?: Record<string, string>,
): CancelablePromise<ShoppingCartModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ShoppingCart/RemoveGiftCardCode`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}