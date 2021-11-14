/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumDto } from '../models/ForumDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumService {

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
            path: `/api-backend/Forum/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ForumDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ForumDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets forums by group identifier
     * @param forumGroupId The forum group identifier
     * @returns ForumDto Success
     * @throws ApiError
     */
    public static getGetAll(
forumGroupId: number,
): CancelablePromise<Array<ForumDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/GetAll/${forumGroupId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ForumDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumDto,
): CancelablePromise<ForumDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Forum/Create`,
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
requestBody?: ForumDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Forum/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to create new topics
     * @param customerId Customer Id
     * @param forumId Forum Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToCreateTopic(
customerId: number,
forumId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToCreateTopic/${customerId}/${forumId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to edit topic
     * @param customerId Customer Id
     * @param topicId Topic Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToEditTopic(
customerId: number,
topicId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToEditTopic/${customerId}/${topicId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to move topic
     * @param customerId Customer Id
     * @param topicId Topic Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToMoveTopic(
customerId: number,
topicId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToMoveTopic/${customerId}/${topicId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to delete topic
     * @param customerId Customer Id
     * @param topicId Topic Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToDeleteTopic(
customerId: number,
topicId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToDeleteTopic/${customerId}/${topicId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to create new post
     * @param customerId Customer Id
     * @param topicId Topic Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToCreatePost(
customerId: number,
topicId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToCreatePost/${customerId}/${topicId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to edit post
     * @param customerId Customer Id
     * @param postId Topic post Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToEditPost(
customerId: number,
postId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToEditPost/${customerId}/${postId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to delete post
     * @param customerId Customer Id
     * @param postId Topic post Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToDeletePost(
customerId: number,
postId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToDeletePost/${customerId}/${postId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to set topic priority
     * @param customerId Customer Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToSetTopicPriority(
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToSetTopicPriority/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether customer is allowed to watch topics
     * @param customerId Customer Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsCustomerAllowedToSubscribe(
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Forum/IsCustomerAllowedToSubscribe/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}