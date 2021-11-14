/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductReviewReviewTypeMappingDto } from '../models/ProductReviewReviewTypeMappingDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductReviewReviewTypeMappingService {

    /**
     * Get product review and review type mappings by product review identifier
     * @param productReviewId The product review identifier
     * @returns ProductReviewReviewTypeMappingDto Success
     * @throws ApiError
     */
    public static getGetProductReviewReviewTypeMappingsByProductReviewId(
productReviewId: number,
): CancelablePromise<Array<ProductReviewReviewTypeMappingDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductReviewReviewTypeMapping/GetProductReviewReviewTypeMappingsByProductReviewId/${productReviewId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts a product review and review type mapping
     * @param requestBody Product review and review type mapping
     * @returns ProductReviewReviewTypeMappingDto Success
     * @throws ApiError
     */
    public static postInsertProductReviewReviewTypeMappings(
requestBody?: ProductReviewReviewTypeMappingDto,
): CancelablePromise<ProductReviewReviewTypeMappingDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductReviewReviewTypeMapping/InsertProductReviewReviewTypeMappings`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}