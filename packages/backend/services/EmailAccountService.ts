/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailAccountDto } from '../models/EmailAccountDto';
import type { MessageTemplateDto } from '../models/MessageTemplateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class EmailAccountService {

    /**
     * Create a email account
     * @param requestBody Email account Dto model
     * @returns EmailAccountDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: MessageTemplateDto,
): CancelablePromise<EmailAccountDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/EmailAccount/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a email account
     * @param requestBody Email account Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: EmailAccountDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/EmailAccount/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a email account
     * @param id Email account identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/EmailAccount/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a email account by identifier
     * @param id The email account identifier
     * @returns EmailAccountDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<EmailAccountDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/EmailAccount/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all email accounts
     * @returns EmailAccountDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<EmailAccountDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/EmailAccount/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}