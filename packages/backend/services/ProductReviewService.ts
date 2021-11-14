/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductReviewDto } from '../models/ProductReviewDto';
import type { ProductReviewProductReviewDtoPagedListDto } from '../models/ProductReviewProductReviewDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductReviewService {

    /**
     * Get product reviews by identifiers
     * @param ids Array of Product review identifiers (separator - ;)
     * @returns ProductReviewDto Success
     * @throws ApiError
     */
    public static getGetProductReviewsByIds(
ids: string,
): CancelablePromise<Array<ProductReviewDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/GetProductReviewsByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deletes product reviews
     * @param ids Array of Product review identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteProductReviews(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/DeleteProductReviews/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Sets or create a product review helpfulness record
     * @param productReviewId Product review identifier
     * @param helpfulness Value indicating whether a review a helpful
     * @returns any Success
     * @throws ApiError
     */
    public static getSetProductReviewHelpfulness(
productReviewId: number,
helpfulness: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/SetProductReviewHelpfulness/${productReviewId}`,
            query: {
                'helpfulness': helpfulness,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Updates a totals helpfulness count for product review
     * @param productReviewId Product review identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateProductReviewHelpfulnessTotals(
productReviewId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/UpdateProductReviewHelpfulnessTotals/${productReviewId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check possibility added review for current customer
     * @param productId Current product
     * @param storeId The store identifier; pass 0 to load all records
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanAddReview(
productId: number,
storeId?: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/CanAddReview/${productId}`,
            query: {
                'storeId': storeId,
            },
            errors: {
                401: `Unauthorized`,
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
            path: `/api-backend/ProductReview/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductReviewDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductReviewDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all product reviews
     * @param customerId Customer identifier (who wrote a review); 0 to load all records
     * @param approved A value indicating whether to content is approved; null to load all records
     * @param fromUtc Item creation from; null to load all records
     * @param toUtc Item item creation to; null to load all records
     * @param message Search title or review text; null to load all records
     * @param storeId The store identifier; pass 0 to load all records
     * @param productId The product identifier; pass 0 to load all records
     * @param vendorId The vendor identifier (limit to products of this vendor); pass 0 to load all records
     * @param showHidden A value indicating whether to show hidden records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ProductReviewProductReviewDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
customerId?: number,
approved?: boolean,
fromUtc?: string,
toUtc?: string,
message?: string,
storeId?: number,
productId?: number,
vendorId?: number,
showHidden: boolean = false,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ProductReviewProductReviewDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReview/GetAll`,
            query: {
                'customerId': customerId,
                'approved': approved,
                'fromUtc': fromUtc,
                'toUtc': toUtc,
                'message': message,
                'storeId': storeId,
                'productId': productId,
                'vendorId': vendorId,
                'showHidden': showHidden,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductReviewDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductReviewDto,
): CancelablePromise<ProductReviewDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductReview/Create`,
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
requestBody?: ProductReviewDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductReview/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}