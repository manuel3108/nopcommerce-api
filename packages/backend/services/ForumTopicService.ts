/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumSearchType } from '../models/ForumSearchType';
import type { ForumTopicDto } from '../models/ForumTopicDto';
import type { ForumTopicForumTopicDtoPagedListDto } from '../models/ForumTopicForumTopicDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumTopicService {

    /**
     * Moves the forum topic
     * @param forumTopicId The forum topic identifier
     * @param newForumId New forum identifier
     * @returns ForumTopicDto Success
     * @throws ApiError
     */
    public static getMoveTopic(
forumTopicId: number,
newForumId: number,
): CancelablePromise<ForumTopicDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumTopic/MoveTopic/${forumTopicId}/${newForumId}`,
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
            path: `/api-backend/ForumTopic/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ForumTopicDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ForumTopicDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumTopic/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all forum topics
     * @param forumId The forum identifier
     * @param customerId The customer identifier
     * @param keywords Keywords
     * @param searchType Search type
     * @param limitDays Limit by the last number days; 0 to load all topics
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ForumTopicForumTopicDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
forumId?: number,
customerId?: number,
keywords: string = '',
searchType?: ForumSearchType,
limitDays?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ForumTopicForumTopicDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumTopic/GetAll`,
            query: {
                'forumId': forumId,
                'customerId': customerId,
                'keywords': keywords,
                'searchType': searchType,
                'limitDays': limitDays,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets active forum topics
     * @param forumId The forum identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ForumTopicForumTopicDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetActiveTopics(
forumId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ForumTopicForumTopicDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumTopic/GetActiveTopics`,
            query: {
                'forumId': forumId,
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
     * @returns ForumTopicDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumTopicDto,
): CancelablePromise<ForumTopicDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ForumTopic/Create`,
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
requestBody?: ForumTopicDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ForumTopic/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}