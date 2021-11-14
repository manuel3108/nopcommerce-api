/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductPictureDto } from '../models/ProductPictureDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductPicturesService {

    /**
     * Gets a product pictures by product identifier
     * @param productId The product identifier
     * @returns ProductPictureDto Success
     * @throws ApiError
     */
    public static getGetProductPicturesByProductId(
productId: number,
): CancelablePromise<Array<ProductPictureDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductPictures/GetProductPicturesByProductId/${productId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get the IDs of all product images
     * @param productsIds Array of product identifiers (separator - ;)
     * @returns number Success
     * @throws ApiError
     */
    public static getGetProductsImagesIds(
productsIds: string,
): CancelablePromise<Record<string, Array<number>>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductPictures/GetProductsImagesIds/${productsIds}`,
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
            path: `/api-backend/ProductPictures/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductPictureDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductPictureDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductPictures/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductPictureDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductPictureDto,
): CancelablePromise<ProductPictureDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductPictures/Create`,
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
requestBody?: ProductPictureDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ProductPictures/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}