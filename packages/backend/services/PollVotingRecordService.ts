/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollAnswerDto } from '../models/PollAnswerDto';
import type { PollVotingRecordDto } from '../models/PollVotingRecordDto';
import type { PollVotingRecordPollVotingRecordDtoPagedListDto } from '../models/PollVotingRecordPollVotingRecordDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PollVotingRecordService {

    /**
     * Gets a poll voting records by parent answer
     * @param id Poll answer identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns PollVotingRecordPollVotingRecordDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetByPollAnswerId(
id: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<PollVotingRecordPollVotingRecordDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/PollVotingRecord/GetByPollAnswerId/${id}`,
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
     * Create a poll voting record
     * @param requestBody Poll voting record Dto model
     * @returns PollAnswerDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: PollVotingRecordDto,
): CancelablePromise<PollAnswerDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/PollVotingRecord/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a value indicating whether customer already voted for this poll
     * @param pollId Poll identifier
     * @param customerId Customer identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getAlreadyVoted(
pollId: number,
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/PollVotingRecord/AlreadyVoted/${pollId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}