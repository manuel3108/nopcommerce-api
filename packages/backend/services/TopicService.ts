/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TopicDto } from '../models/TopicDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TopicService {

    /**
     * Create topic
     * @param requestBody Topic Dto model
     * @returns TopicDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: TopicDto,
): CancelablePromise<TopicDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Topic/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update topic by Id
     * @param requestBody Topic Dto
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: TopicDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Topic/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete topic
     * @param id Topic identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Topic/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a topic
     * @param id The topic identifier
     * @returns TopicDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<TopicDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Topic/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a topic
     * @param systemName The topic system name
     * @param storeId Store identifier; pass 0 to ignore filtering by store and load the first one
     * @param showHidden A value indicating whether to show hidden records
     * @returns TopicDto Success
     * @throws ApiError
     */
    public static getGetBySystemName(
systemName: string,
storeId?: number,
showHidden: boolean = false,
): CancelablePromise<TopicDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Topic/GetBySystemName`,
            query: {
                'systemName': systemName,
                'storeId': storeId,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all topics
     * @param storeId Store identifier; pass 0 to load all records
     * @param keywords Keywords to search into body or title
     * @param ignoreAcl A value indicating whether to ignore ACL rules
     * @param showHidden A value indicating whether to show hidden topics
     * @param onlyIncludedInTopMenu A value indicating whether to show only topics which include on the top menu
     * @returns TopicDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId: number,
keywords?: string,
ignoreAcl: boolean = false,
showHidden: boolean = false,
onlyIncludedInTopMenu: boolean = false,
): CancelablePromise<Array<TopicDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Topic/GetAll/${storeId}`,
            query: {
                'keywords': keywords,
                'ignoreAcl': ignoreAcl,
                'showHidden': showHidden,
                'onlyIncludedInTopMenu': onlyIncludedInTopMenu,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}