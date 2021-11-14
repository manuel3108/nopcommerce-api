/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewsCommentDto } from '../models/NewsCommentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class NewsCommentService {

    /**
     * Gets all news comment
     * @param customerId Customer identifier; 0 to load all records
     * @param storeId Store identifier; pass 0 to load all records
     * @param newsItemId News item ID; 0 or null to load all records
     * @param approved A value indicating whether to content is approved; null to load all records
     * @param fromUtc Item creation from; null to load all records
     * @param toUtc Item creation to; null to load all records
     * @param commentText Search comment text; null to load all records
     * @returns NewsCommentDto Success
     * @throws ApiError
     */
    public static getGetAll(
customerId?: number,
storeId?: number,
newsItemId?: number,
approved?: boolean,
fromUtc?: string,
toUtc?: string,
commentText?: string,
): CancelablePromise<Array<NewsCommentDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsComment/GetAll`,
            query: {
                'customerId': customerId,
                'storeId': storeId,
                'newsItemId': newsItemId,
                'approved': approved,
                'fromUtc': fromUtc,
                'toUtc': toUtc,
                'commentText': commentText,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a news comment
     * @param id News comment identifier
     * @returns NewsCommentDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<NewsCommentDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsComment/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get news comments by identifiers
     * @param ids Array of news comment identifiers (separator - ;)
     * @returns NewsCommentDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<NewsCommentDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsComment/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a news comment
     * @param requestBody News comment Dto model
     * @returns NewsCommentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: NewsCommentDto,
): CancelablePromise<NewsCommentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/NewsComment/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a news comment
     * @param requestBody News comment Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: NewsCommentDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/NewsComment/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a news comment
     * @param id News comment identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/NewsComment/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Deletes a news comments by identifiers
     * @param ids Array of news comment identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static deleteDeleteByIds(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/NewsComment/DeleteByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get the count of news comments
     * @param newsItemId News item identifier
     * @param storeId Store identifier; pass 0 to load all records
     * @param isApproved A value indicating whether to count only approved or not approved comments; pass null to get number of all comments
     * @returns number Success
     * @throws ApiError
     */
    public static getGetNewsCommentsCount(
newsItemId: number,
storeId?: number,
isApproved?: boolean,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsComment/GetNewsCommentsCount/${newsItemId}`,
            query: {
                'storeId': storeId,
                'isApproved': isApproved,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}