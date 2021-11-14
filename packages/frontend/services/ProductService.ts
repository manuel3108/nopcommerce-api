/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProductToCompareListResponse } from '../models/AddProductToCompareListResponse';
import type { CompareProductsModelDto } from '../models/CompareProductsModelDto';
import type { CustomerProductReviewsModelDto } from '../models/CustomerProductReviewsModelDto';
import type { EstimateShippingResultModelDto } from '../models/EstimateShippingResultModelDto';
import type { ProductCombinationModelDto } from '../models/ProductCombinationModelDto';
import type { ProductDetailsResponse } from '../models/ProductDetailsResponse';
import type { ProductEmailAFriendModelDto } from '../models/ProductEmailAFriendModelDto';
import type { ProductEstimateShippingModelDtoBaseModelDtoRequest } from '../models/ProductEstimateShippingModelDtoBaseModelDtoRequest';
import type { ProductOverviewModelDto } from '../models/ProductOverviewModelDto';
import type { ProductReviewsModelDto } from '../models/ProductReviewsModelDto';
import type { SetProductReviewHelpfulnessResponse } from '../models/SetProductReviewHelpfulnessResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Get the product details
     * @param productId 
     * @param updateCartItemId 
     * @returns ProductDetailsResponse Success
     * @throws ApiError
     */
    public static getGetProductDetails(
productId: number,
updateCartItemId?: number,
): CancelablePromise<ProductDetailsResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/GetProductDetails/${productId}`,
            query: {
                'updateCartItemId': updateCartItemId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get the estimate shipping
     * @param requestBody 
     * @returns EstimateShippingResultModelDto Success
     * @throws ApiError
     */
    public static postEstimateShipping(
requestBody?: ProductEstimateShippingModelDtoBaseModelDtoRequest,
): CancelablePromise<EstimateShippingResultModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Product/EstimateShipping`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get product combinations
     * @param productId Product identifier
     * @returns ProductCombinationModelDto Success
     * @throws ApiError
     */
    public static getGetProductCombinations(
productId: number,
): CancelablePromise<Array<ProductCombinationModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/GetProductCombinations/${productId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get recently viewed products
     * @returns ProductOverviewModelDto Success
     * @throws ApiError
     */
    public static getRecentlyViewedProducts(): CancelablePromise<Array<ProductOverviewModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/RecentlyViewedProducts`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a new products
     * @returns ProductOverviewModelDto Success
     * @throws ApiError
     */
    public static getNewProducts(): CancelablePromise<Array<ProductOverviewModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/NewProducts`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * New products RSS
     * @returns string Success
     * @throws ApiError
     */
    public static getNewProductsRss(): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/NewProductsRss`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get product reviews
     * @param productId Product identifier
     * @returns ProductReviewsModelDto Success
     * @throws ApiError
     */
    public static getProductReviews(
productId: number,
): CancelablePromise<ProductReviewsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/ProductReviews/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Add product reviews
     * @param productId 
     * @param requestBody 
     * @returns ProductReviewsModelDto Success
     * @throws ApiError
     */
    public static postProductReviewsAdd(
productId: number,
requestBody?: ProductReviewsModelDto,
): CancelablePromise<ProductReviewsModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Product/ProductReviewsAdd/${productId}`,
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
     * Set product review helpfulness
     * @param productReviewId Product review identifier
     * @param washelpful Indicator if the review was helpful
     * @returns SetProductReviewHelpfulnessResponse Success
     * @throws ApiError
     */
    public static postSetProductReviewHelpfulness(
productReviewId: number,
washelpful: boolean,
): CancelablePromise<SetProductReviewHelpfulnessResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Product/SetProductReviewHelpfulness/${productReviewId}`,
            query: {
                'washelpful': washelpful,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Customer product reviews for current customer
     * @param pageNumber Page number
     * @returns CustomerProductReviewsModelDto Success
     * @throws ApiError
     */
    public static getCustomerProductReviews(
pageNumber?: number,
): CancelablePromise<CustomerProductReviewsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/CustomerProductReviews`,
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * ProductEmailAFriend
     * @param productId Product identifier
     * @returns ProductEmailAFriendModelDto Success
     * @throws ApiError
     */
    public static getProductEmailAFriend(
productId: number,
): CancelablePromise<ProductEmailAFriendModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/ProductEmailAFriend/${productId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Send the product email a friend
     * @param requestBody 
     * @returns ProductEmailAFriendModelDto Success
     * @throws ApiError
     */
    public static postProductEmailAFriendSend(
requestBody?: ProductEmailAFriendModelDto,
): CancelablePromise<ProductEmailAFriendModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Product/ProductEmailAFriendSend`,
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
     * Add product to compare list
     * @param productId Product identifier
     * @returns AddProductToCompareListResponse Success
     * @throws ApiError
     */
    public static getAddProductToCompareList(
productId: number,
): CancelablePromise<AddProductToCompareListResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/AddProductToCompareList/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Remove product from compare list
     * @param productId Product identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getRemoveProductFromCompareList(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/RemoveProductFromCompareList/${productId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Compare products
     * @returns CompareProductsModelDto Success
     * @throws ApiError
     */
    public static getCompareProducts(): CancelablePromise<CompareProductsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/CompareProducts`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Clear compare products list
     * @returns any Success
     * @throws ApiError
     */
    public static getClearCompareList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Product/ClearCompareList`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}