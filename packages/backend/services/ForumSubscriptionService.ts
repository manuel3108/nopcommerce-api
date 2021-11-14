/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumSubscriptionDto } from '../models/ForumSubscriptionDto';
import type { ForumSubscriptionForumSubscriptionDtoPagedListDto } from '../models/ForumSubscriptionForumSubscriptionDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumSubscriptionService {

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
            path: `/api-backend/ForumSubscription/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ForumSubscriptionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ForumSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumSubscription/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets forum subscriptions
     * @param customerId The customer identifier
     * @param forumId The forum identifier
     * @param topicId The topic identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ForumSubscriptionForumSubscriptionDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
customerId?: number,
forumId?: number,
topicId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ForumSubscriptionForumSubscriptionDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumSubscription/GetAll`,
            query: {
                'customerId': customerId,
                'forumId': forumId,
                'topicId': topicId,
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
     * @returns ForumSubscriptionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumSubscriptionDto,
): CancelablePromise<ForumSubscriptionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ForumSubscription/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}