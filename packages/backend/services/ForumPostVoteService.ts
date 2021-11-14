/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumPostVoteDto } from '../models/ForumPostVoteDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumPostVoteService {

    /**
     * Get a post vote
     * @param postId Post identifier
     * @param customerId Customer identifier
     * @returns ForumPostVoteDto Success
     * @throws ApiError
     */
    public static getGetPostVote(
postId: number,
customerId: number,
): CancelablePromise<ForumPostVoteDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumPostVote/GetPostVote/${postId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get post vote made since the parameter date
     * @param customerId Customer identifier
     * @param reatedFromUtc Date
     * @returns number Success
     * @throws ApiError
     */
    public static getGetNumberOfPostVotes(
customerId: number,
reatedFromUtc: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumPostVote/GetNumberOfPostVotes/${customerId}`,
            query: {
                'сreatedFromUtc': reatedFromUtc,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
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
            path: `/api-backend/ForumPostVote/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ForumPostVoteDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumPostVoteDto,
): CancelablePromise<ForumPostVoteDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ForumPostVote/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}