/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlogPostBlogPostDtoPagedListDto } from '../models/BlogPostBlogPostDtoPagedListDto';
import type { BlogPostDto } from '../models/BlogPostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BlogPostService {

    /**
     * Deletes a blog post
     * @param id Blog post Id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/BlogPost/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a blog post
     * @param id Blog post identifier
     * @returns BlogPostDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<BlogPostDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPost/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all blog posts
     * @param storeId The store identifier; pass 0 to load all records
     * @param languageId Language identifier; 0 if you want to get all records
     * @param dateFrom Filter by created date; null if you want to get all records
     * @param dateTo Filter by created date; null if you want to get all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @param title Filter by blog post title
     * @returns BlogPostBlogPostDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId?: number,
languageId?: number,
dateFrom?: string,
dateTo?: string,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
title?: string,
): CancelablePromise<BlogPostBlogPostDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPost/GetAll`,
            query: {
                'storeId': storeId,
                'languageId': languageId,
                'dateFrom': dateFrom,
                'dateTo': dateTo,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
                'title': title,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all blog posts
     * @param storeId The store identifier; pass 0 to load all records
     * @param languageId Language identifier. 0 if you want to get all blog posts
     * @param tag Tag
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns BlogPostBlogPostDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAllByTag(
storeId?: number,
languageId?: number,
tag: string = '',
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<BlogPostBlogPostDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPost/GetAllByTag`,
            query: {
                'storeId': storeId,
                'languageId': languageId,
                'tag': tag,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts a blog post
     * @param requestBody Blog post Dto
     * @returns BlogPostDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: BlogPostDto,
): CancelablePromise<BlogPostDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/BlogPost/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the blog post
     * @param requestBody Blog post Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: BlogPostDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/BlogPost/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Parse tags
     * @param id Blog post id
     * @returns string Success
     * @throws ApiError
     */
    public static getParseTags(
id: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPost/ParseTags/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a value indicating whether a blog post is available now (availability dates)
     * @param id Blog post id
     * @param dateTime Datetime to check; pass null to use current date
     * @returns boolean Success
     * @throws ApiError
     */
    public static getBlogPostIsAvailable(
id: number,
dateTime?: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPost/BlogPostIsAvailable/${id}`,
            query: {
                'dateTime': dateTime,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}