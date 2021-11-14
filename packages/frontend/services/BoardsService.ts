/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveDiscussionsModelDto } from '../models/ActiveDiscussionsModelDto';
import type { BoardsIndexModelDto } from '../models/BoardsIndexModelDto';
import type { CustomerForumSubscriptionsModelDto } from '../models/CustomerForumSubscriptionsModelDto';
import type { EditForumPostModelDto } from '../models/EditForumPostModelDto';
import type { EditForumTopicModelDto } from '../models/EditForumTopicModelDto';
import type { ForumGroupModelDto } from '../models/ForumGroupModelDto';
import type { ForumPageModelDto } from '../models/ForumPageModelDto';
import type { ForumTopicPageModelDto } from '../models/ForumTopicPageModelDto';
import type { ForumWatchResponse } from '../models/ForumWatchResponse';
import type { PostVoteResponse } from '../models/PostVoteResponse';
import type { SearchBoardsModelDto } from '../models/SearchBoardsModelDto';
import type { TopicMoveModelDto } from '../models/TopicMoveModelDto';
import type { TopicWatchResponse } from '../models/TopicWatchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BoardsService {

    /**
     * Index
     * @returns BoardsIndexModelDto Success
     * @throws ApiError
     */
    public static getIndex(): CancelablePromise<BoardsIndexModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/Index`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Active discussions
     * @param forumId Forum identifier
     * @param pageNumber Number of forum topics page
     * @returns ActiveDiscussionsModelDto Success
     * @throws ApiError
     */
    public static getActiveDiscussions(
forumId?: number,
pageNumber: number = 1,
): CancelablePromise<ActiveDiscussionsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/ActiveDiscussions`,
            query: {
                'forumId': forumId,
                'pageNumber': pageNumber,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Active discussions RSS
     * @param forumId Forum identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getActiveDiscussionsRss(
forumId?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/ActiveDiscussionsRss`,
            query: {
                'forumId': forumId,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a forum group
     * @param id The forum group identifier
     * @returns ForumGroupModelDto Success
     * @throws ApiError
     */
    public static getForumGroup(
id: number,
): CancelablePromise<ForumGroupModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/ForumGroup/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get forum page
     * @param id Forum identifier
     * @param pageNumber Number of forum page
     * @returns ForumPageModelDto Success
     * @throws ApiError
     */
    public static getForum(
id: number,
pageNumber: number = 1,
): CancelablePromise<ForumPageModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/Forum/${id}`,
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Forum RSS
     * @param id Forum identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getForumRss(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/ForumRss/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Forum watch
     * @param id Forum identifier
     * @returns ForumWatchResponse Success
     * @throws ApiError
     */
    public static getForumWatch(
id: number,
): CancelablePromise<ForumWatchResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/ForumWatch/${id}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get topic page
     * @param id Topic identifier
     * @param pageNumber Number of topic page
     * @returns ForumTopicPageModelDto Success
     * @throws ApiError
     */
    public static getTopic(
id: number,
pageNumber: number = 1,
): CancelablePromise<ForumTopicPageModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/Topic/${id}`,
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Topic watch
     * @param id Topic identifier
     * @returns TopicWatchResponse Success
     * @throws ApiError
     */
    public static getTopicWatch(
id: number,
): CancelablePromise<TopicWatchResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/TopicWatch/${id}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get topic move model
     * @param id Topic identifier
     * @returns TopicMoveModelDto Success
     * @throws ApiError
     */
    public static getTopicMove(
id: number,
): CancelablePromise<TopicMoveModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/TopicMove/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Topic delete
     * @param id Topic identifier
     * @returns string Success
     * @throws ApiError
     */
    public static deleteTopicDelete(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Boards/TopicDelete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the forum topic create model
     * @param id The forum identifier
     * @returns EditForumTopicModelDto Success
     * @throws ApiError
     */
    public static getTopicCreate(
id: number,
): CancelablePromise<EditForumTopicModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/TopicCreate/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Topic create
     * @param requestBody 
     * @returns EditForumTopicModelDto Success
     * @throws ApiError
     */
    public static postTopicCreate(
requestBody?: EditForumTopicModelDto,
): CancelablePromise<EditForumTopicModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Boards/TopicCreate`,
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
     * Edit the forum topic
     * @param id 
     * @returns EditForumTopicModelDto Success
     * @throws ApiError
     */
    public static getTopicEdit(
id: number,
): CancelablePromise<EditForumTopicModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/TopicEdit/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Edit the forum topic
     * @param requestBody 
     * @returns EditForumTopicModelDto Success
     * @throws ApiError
     */
    public static postTopicEdit(
requestBody?: EditForumTopicModelDto,
): CancelablePromise<EditForumTopicModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Boards/TopicEdit`,
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
     * Delete the forum post
     * @param id 
     * @returns EditForumTopicModelDto Success
     * @throws ApiError
     */
    public static deletePostDelete(
id: number,
): CancelablePromise<EditForumTopicModelDto> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Boards/PostDelete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare forum post model
     * @param id Forum topic identifier
     * @param quote 
     * @param quoteId Identifier of the quoted post; pass 0 to load the empty text
     * @returns EditForumPostModelDto Success
     * @throws ApiError
     */
    public static getPostCreate(
id: number,
quote: string,
quoteId?: number,
): CancelablePromise<EditForumPostModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/PostCreate/${id}/${quote}`,
            query: {
                'quoteId': quoteId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create forum post
     * @param requestBody 
     * @returns EditForumPostModelDto Success
     * @throws ApiError
     */
    public static postPostCreate(
requestBody?: EditForumPostModelDto,
): CancelablePromise<EditForumPostModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Boards/PostCreate`,
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
     * Prepare the forum post edit model
     * @param id The forum post identifier
     * @returns EditForumPostModelDto Success
     * @throws ApiError
     */
    public static getPostEdit(
id: number,
): CancelablePromise<EditForumPostModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/PostEdit/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Edit forum post
     * @param requestBody 
     * @returns EditForumPostModelDto Success
     * @throws ApiError
     */
    public static postPostEdit(
requestBody?: EditForumPostModelDto,
): CancelablePromise<EditForumPostModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Boards/PostEdit`,
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
     * Search terms in forum post
     * @param searchTerms Search terms
     * @param forumId Forum identifier
     * @param within String representation of int value of ForumSearchType
     * @param limitDays Limit by the last number days; 0 to load all topics
     * @param page Number of items page
     * @param advs Whether to use the advanced search
     * @returns SearchBoardsModelDto Success
     * @throws ApiError
     */
    public static getSearch(
searchTerms: string,
forumId: string,
within: string,
limitDays: string,
page: number,
advs?: boolean,
): CancelablePromise<SearchBoardsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/Search/${forumId}`,
            query: {
                'searchTerms': searchTerms,
                'advs': advs,
                'within': within,
                'limitDays': limitDays,
                'page': page,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare the customer forum subscriptions model
     * @param pageNumber Number of items page; pass null to load the first page
     * @returns CustomerForumSubscriptionsModelDto Success
     * @throws ApiError
     */
    public static getCustomerForumSubscriptions(
pageNumber?: number,
): CancelablePromise<CustomerForumSubscriptionsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/CustomerForumSubscriptions`,
            query: {
                'pageNumber': pageNumber,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Customer forum subscriptions POST
     * @param requestBody 
     * @returns CustomerForumSubscriptionsModelDto Success
     * @throws ApiError
     */
    public static postCustomerForumSubscriptionsPost(
requestBody?: Record<string, string>,
): CancelablePromise<CustomerForumSubscriptionsModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Boards/CustomerForumSubscriptionsPOST`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * POst vote
     * @param postId Post identifier
     * @param isUp Is up
     * @returns PostVoteResponse Success
     * @throws ApiError
     */
    public static getPostVote(
postId: number,
isUp: boolean,
): CancelablePromise<PostVoteResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Boards/PostVote/${postId}`,
            query: {
                'isUp': isUp,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}