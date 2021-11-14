/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollDto } from '../models/PollDto';
import type { PollPollDtoPagedListDto } from '../models/PollPollDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PollService {

    /**
     * Gets all polls
     * @param storeId The store identifier; pass 0 to load all records
     * @param languageId Language identifier; pass 0 to load all records
     * @param showHidden Whether to show hidden records (not published, not started and expired)
     * @param loadShownOnHomepageOnly Retrieve only shown on home page polls
     * @param systemKeyword The poll system keyword; pass null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns PollPollDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId: number,
languageId?: number,
showHidden: boolean = false,
loadShownOnHomepageOnly: boolean = false,
systemKeyword?: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<PollPollDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Poll/GetAll/${storeId}`,
            query: {
                'languageId': languageId,
                'showHidden': showHidden,
                'loadShownOnHomepageOnly': loadShownOnHomepageOnly,
                'systemKeyword': systemKeyword,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a poll
     * @param id Poll identifier
     * @returns PollDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<PollDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Poll/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a poll
     * @param requestBody Poll Dto model
     * @returns PollDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PollDto,
): CancelablePromise<PollDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Poll/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a poll
     * @param requestBody Poll Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: PollDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Poll/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a poll
     * @param id Poll identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Poll/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}