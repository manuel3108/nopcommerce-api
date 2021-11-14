/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollAnswerDto } from '../models/PollAnswerDto';
import type { PollAnswerPollAnswerDtoPagedListDto } from '../models/PollAnswerPollAnswerDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PollAnswerService {

    /**
     * Gets a poll answer
     * @param id Poll answer identifier
     * @returns PollAnswerDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<PollAnswerDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PollAnswer/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a poll answer
     * @param id Poll identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns PollAnswerPollAnswerDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetByPollId(
id: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<PollAnswerPollAnswerDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PollAnswer/GetByPollId/${id}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a poll answer
     * @param requestBody Poll answer Dto model
     * @returns PollAnswerDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PollAnswerDto,
): CancelablePromise<PollAnswerDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/PollAnswer/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a poll answer
     * @param requestBody Poll answer Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: PollAnswerDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/PollAnswer/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a poll answer
     * @param id Poll answer identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/PollAnswer/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}