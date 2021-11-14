/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateMessageIndexModelDto } from '../models/PrivateMessageIndexModelDto';
import type { PrivateMessageModelDto } from '../models/PrivateMessageModelDto';
import type { SendPrivateMessageModelDto } from '../models/SendPrivateMessageModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PrivateMessagesService {

    /**
     * @param tab 
     * @param pageNumber 
     * @returns PrivateMessageIndexModelDto Success
     * @throws ApiError
     */
    public static getIndex(
tab: string,
pageNumber?: number,
): CancelablePromise<PrivateMessageIndexModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/PrivateMessages/Index`,
            query: {
                'tab': tab,
                'pageNumber': pageNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postDeleteInboxPm(
requestBody?: Record<string, string>,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-frontend/PrivateMessages/DeleteInboxPM`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postMarkUnread(
requestBody?: Record<string, string>,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-frontend/PrivateMessages/MarkUnread`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postDeleteSentPm(
requestBody?: Record<string, string>,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-frontend/PrivateMessages/DeleteSentPM`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param toCustomerId 
     * @param replyToMessageId 
     * @returns SendPrivateMessageModelDto Success
     * @throws ApiError
     */
    public static getSendPm(
toCustomerId: number,
replyToMessageId?: number,
): CancelablePromise<SendPrivateMessageModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/PrivateMessages/SendPM/${toCustomerId}`,
            query: {
                'replyToMessageId': replyToMessageId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SendPrivateMessageModelDto Success
     * @throws ApiError
     */
    public static postSendPm(
requestBody?: SendPrivateMessageModelDto,
): CancelablePromise<SendPrivateMessageModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/PrivateMessages/SendPM`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param privateMessageId 
     * @returns PrivateMessageModelDto Success
     * @throws ApiError
     */
    public static getViewPm(
privateMessageId: number,
): CancelablePromise<PrivateMessageModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/PrivateMessages/ViewPM/${privateMessageId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param privateMessageId 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeletePm(
privateMessageId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/PrivateMessages/DeletePM/${privateMessageId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}