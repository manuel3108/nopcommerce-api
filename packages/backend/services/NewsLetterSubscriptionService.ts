/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewsLetterSubscriptionDto } from '../models/NewsLetterSubscriptionDto';
import type { NewsLetterSubscriptionNewsLetterSubscriptionDtoPagedListDto } from '../models/NewsLetterSubscriptionNewsLetterSubscriptionDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class NewsLetterSubscriptionService {

    /**
     * Create a newsletter subscription
     * @param requestBody NewsLetter subscription Dto model
     * @returns NewsLetterSubscriptionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: NewsLetterSubscriptionDto,
): CancelablePromise<NewsLetterSubscriptionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/NewsLetterSubscription/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a newsletter subscription
     * @param requestBody NewsLetter subscription Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: NewsLetterSubscriptionDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/NewsLetterSubscription/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a newsLetter subscription
     * @param id NewsLetter subscription identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/NewsLetterSubscription/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a newsletter subscription by newsletter subscription identifier
     * @param id The newsletter subscription identifier
     * @returns NewsLetterSubscriptionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<NewsLetterSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsLetterSubscription/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a newsletter subscription by newsletter subscription GUID
     * @param guid The newsletter subscription GUID
     * @returns NewsLetterSubscriptionDto Success
     * @throws ApiError
     */
    public static getGetByGuid(
guid: string,
): CancelablePromise<NewsLetterSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsLetterSubscription/GetByGuid`,
            query: {
                'guid': guid,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a newsletter subscription by newsletter subscription identifier
     * @param email The newsletter subscription email
     * @param storeId Store identifier
     * @returns NewsLetterSubscriptionDto Success
     * @throws ApiError
     */
    public static getGetByEmailAndStoreId(
email: string,
storeId: number,
): CancelablePromise<NewsLetterSubscriptionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsLetterSubscription/GetByEmailAndStoreId/${storeId}`,
            query: {
                'email': email,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the newsletter subscription list
     * @param email Email to search or string. Empty to load all records.
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param storeId Store identifier. 0 to load all records.
     * @param isActive Value indicating whether subscriber record should be active or not; null to load all records
     * @param customerRoleId Customer role identifier. Used to filter subscribers by customer role. 0 to load all records.
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns NewsLetterSubscriptionNewsLetterSubscriptionDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
email?: string,
createdFromUtc?: string,
createdToUtc?: string,
storeId?: number,
isActive?: boolean,
customerRoleId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<NewsLetterSubscriptionNewsLetterSubscriptionDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/NewsLetterSubscription/GetAll`,
            query: {
                'email': email,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'storeId': storeId,
                'isActive': isActive,
                'customerRoleId': customerRoleId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}