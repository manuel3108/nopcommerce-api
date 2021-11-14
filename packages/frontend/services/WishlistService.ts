/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WishlistEmailAFriendModelDto } from '../models/WishlistEmailAFriendModelDto';
import type { WishlistModelDto } from '../models/WishlistModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class WishlistService {

    /**
     * @param customerGuid 
     * @returns WishlistModelDto Success
     * @throws ApiError
     */
    public static getWishlist(
customerGuid?: string,
): CancelablePromise<WishlistModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Wishlist/Wishlist`,
            query: {
                'customerGuid': customerGuid,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns WishlistModelDto Success
     * @throws ApiError
     */
    public static postUpdateWishlist(
requestBody?: Record<string, string>,
): CancelablePromise<WishlistModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Wishlist/UpdateWishlist`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param customerGuid 
     * @param requestBody 
     * @returns WishlistModelDto Success
     * @throws ApiError
     */
    public static putAddItemsToCartFromWishlist(
customerGuid?: string,
requestBody?: Record<string, string>,
): CancelablePromise<WishlistModelDto> {
        return __request({
            method: 'PUT',
            path: `/api-frontend/Wishlist/AddItemsToCartFromWishlist`,
            query: {
                'customerGuid': customerGuid,
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
     * @returns WishlistEmailAFriendModelDto Success
     * @throws ApiError
     */
    public static getEmailWishlist(): CancelablePromise<WishlistEmailAFriendModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Wishlist/EmailWishlist`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns WishlistEmailAFriendModelDto Success
     * @throws ApiError
     */
    public static postEmailWishlistSend(
requestBody?: WishlistEmailAFriendModelDto,
): CancelablePromise<WishlistEmailAFriendModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Wishlist/EmailWishlistSend`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}