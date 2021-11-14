/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueuedEmailDto } from '../models/QueuedEmailDto';
import type { QueuedEmailQueuedEmailDtoPagedListDto } from '../models/QueuedEmailQueuedEmailDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class QueuedEmailService {

    /**
     * Gets a queued email by identifier
     * @param id Queued email identifier
     * @returns QueuedEmailDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<QueuedEmailDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/QueuedEmail/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get queued email by identifiers
     * @param ids Array of queued email identifiers (separator - ;)
     * @returns QueuedEmailDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<QueuedEmailDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/QueuedEmail/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a queued email
     * @param requestBody Queued email Dto model
     * @returns QueuedEmailDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: QueuedEmailDto,
): CancelablePromise<QueuedEmailDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/QueuedEmail/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a queued email
     * @param requestBody Queued email Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: QueuedEmailDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/QueuedEmail/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a queued email
     * @param id Queued email identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/QueuedEmail/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete queued emails by identifiers
     * @param ids Array of queued email identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static deleteDeleteByIds(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/QueuedEmail/DeleteByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete all queued emails
     * @returns void 
     * @throws ApiError
     */
    public static deleteDeleteAll(): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/QueuedEmail/DeleteAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete all queued emails
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @returns number Success
     * @throws ApiError
     */
    public static deleteDeleteAlreadySentEmails(
createdFromUtc?: string,
createdToUtc?: string,
): CancelablePromise<number> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/QueuedEmail/DeleteAlreadySentEmails`,
            query: {
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all queued emails
     * @param fromEmail From Email
     * @param toEmail To Email
     * @param loadNotSentItemsOnly A value indicating whether to load only not sent emails
     * @param loadOnlyItemsToBeSent A value indicating whether to load only emails for ready to be sent
     * @param maxSendTries Maximum send tries
     * @param loadNewest A value indicating whether we should sort queued email descending; otherwise, ascending.
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns QueuedEmailQueuedEmailDtoPagedListDto Success
     * @throws ApiError
     */
    public static getSearchEmails(
fromEmail: string,
toEmail: string,
loadNotSentItemsOnly: boolean,
loadOnlyItemsToBeSent: boolean,
maxSendTries: number,
loadNewest: boolean,
createdFromUtc?: string,
createdToUtc?: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<QueuedEmailQueuedEmailDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/QueuedEmail/SearchEmails`,
            query: {
                'fromEmail': fromEmail,
                'toEmail': toEmail,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'loadNotSentItemsOnly': loadNotSentItemsOnly,
                'loadOnlyItemsToBeSent': loadOnlyItemsToBeSent,
                'maxSendTries': maxSendTries,
                'loadNewest': loadNewest,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}