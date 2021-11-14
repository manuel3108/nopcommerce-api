/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchTermDto } from '../models/SearchTermDto';
import type { SearchTermReportLineSearchTermReportLineDtoPagedListDto } from '../models/SearchTermReportLineSearchTermReportLineDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SearchTermService {

    /**
     * Gets a search term record by keyword
     * @param keyword Search term keyword
     * @param storeId Store identifier
     * @returns SearchTermDto Success
     * @throws ApiError
     */
    public static getGetSearchTermByKeyword(
keyword: string,
storeId: number,
): CancelablePromise<SearchTermDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SearchTerm/GetSearchTermByKeyword/${storeId}`,
            query: {
                'keyword': keyword,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a search term statistics
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns SearchTermReportLineSearchTermReportLineDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetStats(
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<SearchTermReportLineSearchTermReportLineDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/SearchTerm/GetStats`,
            query: {
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
     * @returns SearchTermDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: SearchTermDto,
): CancelablePromise<SearchTermDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/SearchTerm/Create`,
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
requestBody?: SearchTermDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/SearchTerm/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}