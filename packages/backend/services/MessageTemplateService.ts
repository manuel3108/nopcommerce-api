/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageTemplateDto } from '../models/MessageTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MessageTemplateService {

    /**
     * Delete a message template
     * @param id Message template identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/MessageTemplate/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a message template
     * @param requestBody Message template Dto model
     * @returns MessageTemplateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: MessageTemplateDto,
): CancelablePromise<MessageTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/MessageTemplate/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a message template
     * @param requestBody Message template Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: MessageTemplateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/MessageTemplate/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a message template by identifier
     * @param id The message template identifier
     * @returns MessageTemplateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<MessageTemplateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/MessageTemplate/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a message templates by name
     * @param name The message template name
     * @param storeId Store identifier
     * @returns MessageTemplateDto Success
     * @throws ApiError
     */
    public static getGetByName(
name: string,
storeId?: number,
): CancelablePromise<Array<MessageTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/MessageTemplate/GetByName`,
            query: {
                'name': name,
                'storeId': storeId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all message templates
     * @param storeId Store identifier
     * @returns MessageTemplateDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId: number,
): CancelablePromise<Array<MessageTemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/MessageTemplate/GetAll/${storeId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a copy of message template with all depended data
     * @param requestBody Message template Dto model
     * @returns MessageTemplateDto Success
     * @throws ApiError
     */
    public static postCopy(
requestBody?: MessageTemplateDto,
): CancelablePromise<MessageTemplateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/MessageTemplate/Copy`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}