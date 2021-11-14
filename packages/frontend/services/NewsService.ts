/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePageableModelDto } from '../models/BasePageableModelDto';
import type { NewsItemListModelDto } from '../models/NewsItemListModelDto';
import type { NewsItemModelDto } from '../models/NewsItemModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class NewsService {

    /**
     * @param requestBody 
     * @returns NewsItemListModelDto Success
     * @throws ApiError
     */
    public static postList(
requestBody?: BasePageableModelDto,
): CancelablePromise<NewsItemListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/News/List`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param languageId 
     * @returns string Success
     * @throws ApiError
     */
    public static getListRss(
languageId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/News/ListRss/${languageId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param newsItemId 
     * @returns NewsItemModelDto Success
     * @throws ApiError
     */
    public static getGetNewsItem(
newsItemId: number,
): CancelablePromise<NewsItemModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/News/GetNewsItem/${newsItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param newsItemId 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postNewsCommentAdd(
newsItemId: number,
requestBody?: NewsItemModelDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-frontend/News/NewsCommentAdd/${newsItemId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}