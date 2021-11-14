/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPictureUrlResponse } from '../models/GetPictureUrlResponse';
import type { PictureDto } from '../models/PictureDto';
import type { PicturePictureDtoPagedListDto } from '../models/PicturePictureDtoPagedListDto';
import type { PictureType } from '../models/PictureType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PictureService {

    /**
     * Gets a picture by identifier
     * @param id The picture identifier
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<PictureDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a picture
     * @param id Picture identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Picture/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a collection of pictures
     * @param virtualPath Virtual path
     * @param pageIndex Current page
     * @param pageSize Items on each page
     * @returns PicturePictureDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetPictures(
virtualPath: string = '',
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<PicturePictureDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetPictures`,
            query: {
                'virtualPath': virtualPath,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a picture by identifier
     * @param id The product identifier
     * @param recordsToReturn Number of records to return. 0 if you want to get all items
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static getGetByProductId(
id: number,
recordsToReturn?: number,
): CancelablePromise<Array<PictureDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetByProductId/${id}`,
            query: {
                'recordsToReturn': recordsToReturn,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts a picture
     * @param mimeType The picture MIME type
     * @param seoFilename The SEO filename
     * @param altAttribute "alt" attribute for "img" HTML element
     * @param titleAttribute "title" attribute for "img" HTML element
     * @param isNew A value indicating whether the picture is new
     * @param validateBinary A value indicating whether to validated provided picture binary
     * @param requestBody The picture binary
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static putInsertPicture(
mimeType: string,
seoFilename: string,
altAttribute?: string,
titleAttribute?: string,
isNew: boolean = true,
validateBinary: boolean = true,
requestBody?: string,
): CancelablePromise<PictureDto> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Picture/InsertPicture`,
            query: {
                'mimeType': mimeType,
                'seoFilename': seoFilename,
                'altAttribute': altAttribute,
                'titleAttribute': titleAttribute,
                'isNew': isNew,
                'validateBinary': validateBinary,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a picture
     * @param pictureId The picture identifier
     * @param mimeType The picture MIME type
     * @param seoFilename The SEO filename
     * @param altAttribute "alt" attribute for "img" HTML element
     * @param titleAttribute "title" attribute for "img" HTML element
     * @param isNew A value indicating whether the picture is new
     * @param validateBinary A value indicating whether to validated provided picture binary
     * @param requestBody The picture binary
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static putUpdatePicture(
pictureId: number,
mimeType: string,
seoFilename: string,
altAttribute?: string,
titleAttribute?: string,
isNew: boolean = true,
validateBinary: boolean = true,
requestBody?: string,
): CancelablePromise<PictureDto> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Picture/UpdatePicture/${pictureId}`,
            query: {
                'mimeType': mimeType,
                'seoFilename': seoFilename,
                'altAttribute': altAttribute,
                'titleAttribute': titleAttribute,
                'isNew': isNew,
                'validateBinary': validateBinary,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a picture
     * @param requestBody Picture Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: PictureDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Picture/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Updates a SEO filename of a picture
     * @param pictureId The picture identifier
     * @param seoFilename The SEO filename
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static getSetSeoFilename(
pictureId: number,
seoFilename: string,
): CancelablePromise<PictureDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/SetSeoFilename/${pictureId}`,
            query: {
                'seoFilename': seoFilename,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get pictures hashes
     * @param picturesIds Pictures identifier (separator - ;)
     * @returns string Success
     * @throws ApiError
     */
    public static getGetPicturesHash(
picturesIds: string,
): CancelablePromise<Record<string, string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetPicturesHash/${picturesIds}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get product picture (for shopping cart and order details pages)
     * @param productId Product
     * @param requestBody Attributes in XML format
     * @returns PictureDto Success
     * @throws ApiError
     */
    public static postGetProductPicture(
productId: number,
requestBody?: string,
): CancelablePromise<PictureDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Picture/GetProductPicture/${productId}`,
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
     * Gets the loaded picture binary depending on picture storage settings
     * @param pictureId The picture identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getLoadPictureBinary(
pictureId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/LoadPictureBinary/${pictureId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get picture SEO friendly name
     * @param name Name
     * @returns string Success
     * @throws ApiError
     */
    public static getGetPictureSeName(
name: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetPictureSeName`,
            query: {
                'name': name,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets the default picture URL
     * @param targetSize The target picture size (longest side)
     * @param defaultPictureType Default picture type
     * @param storeLocation Store location URL; null to use determine the current store location automatically
     * @returns string Success
     * @throws ApiError
     */
    public static getGetDefaultPictureUrl(
targetSize?: number,
defaultPictureType?: PictureType,
storeLocation?: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetDefaultPictureUrl`,
            query: {
                'targetSize': targetSize,
                'defaultPictureType': defaultPictureType,
                'storeLocation': storeLocation,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get a picture URL
     * @param pictureId Reference instance of Picture
     * @param targetSize The target picture size (longest side)
     * @param showDefaultPicture A value indicating whether the default picture is shown
     * @param storeLocation Store location URL; null to use determine the current store location automatically
     * @param defaultPictureType Default picture type
     * @returns GetPictureUrlResponse Success
     * @throws ApiError
     */
    public static getGetPictureUrl(
pictureId: number,
targetSize?: number,
showDefaultPicture: boolean = true,
storeLocation?: string,
defaultPictureType?: PictureType,
): CancelablePromise<GetPictureUrlResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetPictureUrl/${pictureId}`,
            query: {
                'targetSize': targetSize,
                'showDefaultPicture': showDefaultPicture,
                'storeLocation': storeLocation,
                'defaultPictureType': defaultPictureType,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a picture local path
     * @param pictureId Picture identifier
     * @param targetSize The target picture size (longest side)
     * @param showDefaultPicture A value indicating whether the default picture is shown
     * @returns string Success
     * @throws ApiError
     */
    public static getGetThumbLocalPath(
pictureId: number,
targetSize?: number,
showDefaultPicture: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Picture/GetThumbLocalPath/${pictureId}`,
            query: {
                'targetSize': targetSize,
                'showDefaultPicture': showDefaultPicture,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}