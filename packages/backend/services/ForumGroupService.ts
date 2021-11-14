/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForumGroupDto } from '../models/ForumGroupDto';
import type { ForumGroupForumGroupDtoPagedListDto } from '../models/ForumGroupForumGroupDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForumGroupService {

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
            path: `/api-backend/ForumGroup/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ForumGroupDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ForumGroupDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumGroup/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all forum groups
     * @returns ForumGroupForumGroupDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<ForumGroupForumGroupDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ForumGroup/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ForumGroupDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ForumGroupDto,
): CancelablePromise<ForumGroupDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ForumGroup/Create`,
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
requestBody?: ForumGroupDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ForumGroup/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}