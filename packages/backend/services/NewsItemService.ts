/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewsItemDto } from '../models/NewsItemDto';
import type { NewsItemNewsItemDtoPagedListDto } from '../models/NewsItemNewsItemDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class NewsItemService {

    /**
     * Gets all news items
     * @param languageId Language identifier; 0 if you want to get all records
     * @param storeId Store identifier; 0 if you want to get all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @param title Filter by news item title
     * @returns NewsItemNewsItemDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
languageId?: number,
storeId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
title?: string,
): CancelablePromise<NewsItemNewsItemDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsItem/GetAll`,
            query: {
                'languageId': languageId,
                'storeId': storeId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
                'title': title,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a news
     * @param id News identifier
     * @returns NewsItemDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<NewsItemDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsItem/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a news
     * @param requestBody News item Dto model
     * @returns NewsItemDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: NewsItemDto,
): CancelablePromise<NewsItemDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/NewsItem/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a news
     * @param requestBody News item Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: NewsItemDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/NewsItem/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a news
     * @param id News item identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/NewsItem/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a value indicating whether a news item is available now (availability dates)
     * @param newsItemId News item identifier
     * @param dateTime Datetime to check; pass null to use current date
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsNewsAvailable(
newsItemId: number,
dateTime?: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsItem/IsNewsAvailable/${newsItemId}`,
            query: {
                'dateTime': dateTime,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}