/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductDto } from '../models/ProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CopyProductService {

    /**
     * Create a copy of product with all depended data
     * @param productId The product id to copy
     * @param newName The name of product duplicate
     * @param isPublished A value indicating whether the product duplicate should be published
     * @param copyImages A value indicating whether the product images should be copied
     * @param copyAssociatedProducts A value indicating whether the copy associated products
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getCopyProduct(
productId: number,
newName: string,
isPublished: boolean = true,
copyImages: boolean = true,
copyAssociatedProducts: boolean = true,
): CancelablePromise<ProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CopyProduct/CopyProduct/${productId}`,
            query: {
                'newName': newName,
                'isPublished': isPublished,
                'copyImages': copyImages,
                'copyAssociatedProducts': copyAssociatedProducts,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}