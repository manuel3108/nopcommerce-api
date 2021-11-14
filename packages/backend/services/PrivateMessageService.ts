/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateMessageDto } from '../models/PrivateMessageDto';
import type { PrivateMessagePrivateMessageDtoPagedListDto } from '../models/PrivateMessagePrivateMessageDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PrivateMessageService {

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
            path: `/api-backend/PrivateMessage/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns PrivateMessageDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<PrivateMessageDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PrivateMessage/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets private messages
     * @param storeId The store identifier; pass 0 to load all messages
     * @param fromCustomerId The customer identifier who sent the message
     * @param toCustomerId The customer identifier who should receive the message
     * @param keywords Keywords
     * @param isRead A value indicating whether loaded messages are read. false - to load not read messages only, 1 to load read messages only, null to load all messages
     * @param isDeletedByAuthor A value indicating whether loaded messages are deleted by author. false - messages are not deleted by author, null to load all messages
     * @param isDeletedByRecipient A value indicating whether loaded messages are deleted by recipient. false - messages are not deleted by recipient, null to load all messages
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns PrivateMessagePrivateMessageDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId: number,
fromCustomerId: number,
toCustomerId: number,
keywords: string,
isRead?: boolean,
isDeletedByAuthor?: boolean,
isDeletedByRecipient?: boolean,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<PrivateMessagePrivateMessageDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PrivateMessage/GetAll/${storeId}/${fromCustomerId}/${toCustomerId}`,
            query: {
                'isRead': isRead,
                'isDeletedByAuthor': isDeletedByAuthor,
                'isDeletedByRecipient': isDeletedByRecipient,
                'keywords': keywords,
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
     * @returns PrivateMessageDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PrivateMessageDto,
): CancelablePromise<PrivateMessageDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/PrivateMessage/Create`,
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
requestBody?: PrivateMessageDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/PrivateMessage/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}