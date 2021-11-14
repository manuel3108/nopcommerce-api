/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageDto } from '../models/LanguageDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LanguageService {

    /**
     * Export language resources to XML
     * @param id Language identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getExportResourcesToXml(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/ExportResourcesToXml/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get localized permission name
     * @param permissionRecordId Permission record identifier
     * @param languageId Language identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getGetLocalizedPermissionName(
permissionRecordId: number,
languageId?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/GetLocalizedPermissionName/${permissionRecordId}`,
            query: {
                'languageId': languageId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Save localized name of a permission
     * @param permissionRecordId Permission record identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getSaveLocalizedPermissionName(
permissionRecordId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/SaveLocalizedPermissionName/${permissionRecordId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a localized name of a permission
     * @param permissionRecordId Permission record identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteLocalizedPermissionName(
permissionRecordId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Language/DeleteLocalizedPermissionName/${permissionRecordId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a language
     * @param id Language identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Language/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all languages
     * @param showHidden A value indicating whether to show hidden records
     * @param storeId Load records allowed only in a specified store; pass 0 to load all records
     * @returns LanguageDto Success
     * @throws ApiError
     */
    public static getGetAll(
showHidden: boolean = false,
storeId?: number,
): CancelablePromise<Array<LanguageDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/GetAll`,
            query: {
                'showHidden': showHidden,
                'storeId': storeId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a language
     * @param id Language identifier
     * @returns LanguageDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<LanguageDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a language
     * @param requestBody Language Dto model
     * @returns LanguageDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: LanguageDto,
): CancelablePromise<LanguageDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Language/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a language
     * @param requestBody Language Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: LanguageDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Language/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get 2 letter ISO language code
     * @param id Language identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getGetTwoLetterIsoLanguageName(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Language/GetTwoLetterIsoLanguageName/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}