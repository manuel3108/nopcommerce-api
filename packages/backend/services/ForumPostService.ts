/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumPostDto } from '../models/ForumPostDto';
import type { ForumPostForumPostDtoPagedListDto } from '../models/ForumPostForumPostDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumPostService {

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
            path: `/api-backend/ForumPost/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ForumPostDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ForumPostDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumPost/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all forum posts
     * @param forumTopicId The forum topic identifier
     * @param customerId The customer identifier
     * @param keywords Keywords
     * @param ascSort Sort order
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ForumPostForumPostDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
forumTopicId?: number,
customerId?: number,
keywords: string = '',
ascSort: boolean = false,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ForumPostForumPostDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumPost/GetAll`,
            query: {
                'forumTopicId': forumTopicId,
                'customerId': customerId,
                'keywords': keywords,
                'ascSort': ascSort,
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
     * @returns ForumPostDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumPostDto,
): CancelablePromise<ForumPostDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ForumPost/Create`,
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
requestBody?: ForumPostDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ForumPost/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}