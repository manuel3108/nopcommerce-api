/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PictureBinaryDto } from '../models/PictureBinaryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PictureBinaryService {

    /**
     * Gets a product picture binary by picture identifier
     * @param id The picture identifier
     * @returns PictureBinaryDto Success
     * @throws ApiError
     */
    public static getGetByPictureId(
id: number,
): CancelablePromise<PictureBinaryDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PictureBinary/GetByPictureId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validates input picture dimensions
     * @param mimeType The picture MIME type
     * @param requestBody The picture binary
     * @returns string Success
     * @throws ApiError
     */
    public static postValidatePicture(
mimeType: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/PictureBinary/ValidatePicture`,
            query: {
                'mimeType': mimeType,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}