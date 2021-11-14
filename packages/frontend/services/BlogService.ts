/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPagingFilteringModelDto } from '../models/BlogPagingFilteringModelDto';
import type { BlogPostListModelDto } from '../models/BlogPostListModelDto';
import type { BlogPostModelDto } from '../models/BlogPostModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BlogService {

    /**
     * @param requestBody 
     * @returns BlogPostListModelDto Success
     * @throws ApiError
     */
    public static postList(
requestBody?: BlogPagingFilteringModelDto,
): CancelablePromise<BlogPostListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Blog/List`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns BlogPostListModelDto Success
     * @throws ApiError
     */
    public static postBlogByTag(
requestBody?: BlogPagingFilteringModelDto,
): CancelablePromise<BlogPostListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Blog/BlogByTag`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns BlogPostListModelDto Success
     * @throws ApiError
     */
    public static postBlogByMonth(
requestBody?: BlogPagingFilteringModelDto,
): CancelablePromise<BlogPostListModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Blog/BlogByMonth`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param languageId 
     * @returns string Success
     * @throws ApiError
     */
    public static getListRss(
languageId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Blog/ListRss/${languageId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param blogPostId 
     * @returns BlogPostModelDto Success
     * @throws ApiError
     */
    public static getGetBlogPost(
blogPostId: number,
): CancelablePromise<BlogPostModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Blog/GetBlogPost/${blogPostId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param blogPostId 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postBlogCommentAdd(
blogPostId: number,
requestBody?: BlogPostModelDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Blog/BlogCommentAdd/${blogPostId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}