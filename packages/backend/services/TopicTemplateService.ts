/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TopicTemplateDto } from '../models/TopicTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TopicTemplateService {

    /**
     * Gets all topic templates
     * @returns TopicTemplateDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<TopicTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/TopicTemplate/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a topic template
     * @param id Topic template identifier
     * @returns TopicTemplateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<TopicTemplateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/TopicTemplate/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create topic template
     * @param requestBody Topic template Dto
     * @returns TopicTemplateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: TopicTemplateDto,
): CancelablePromise<TopicTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/TopicTemplate/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Upadete topic by Id
     * @param requestBody Topic Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: TopicTemplateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/TopicTemplate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete topic template
     * @param id Topic template identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/TopicTemplate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}