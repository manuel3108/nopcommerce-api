/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UrlRecordDto } from '../models/UrlRecordDto';
import type { UrlRecordUrlRecordDtoPagedListDto } from '../models/UrlRecordUrlRecordDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UrlRecordService {

    /**
     * Gets all URL records
     * @param slug Slug
     * @param languageId Language ID; "null" to load records with any language; "0" to load records with standard language only; otherwise to load records with specify language ID only
     * @param isActive A value indicating whether to get active records; "null" to load all records; "false" to load only inactive records; "true" to load only active records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns UrlRecordUrlRecordDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
slug: string = '',
languageId?: number,
isActive?: boolean,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<UrlRecordUrlRecordDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetAll`,
            query: {
                'slug': slug,
                'languageId': languageId,
                'isActive': isActive,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an URL records by identifiers
     * @param ids Array of URL record identifiers (separator - ;)
     * @returns UrlRecordDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<UrlRecordDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a URL record by slug
     * @param slug Slug
     * @returns UrlRecordDto Success
     * @throws ApiError
     */
    public static getGetBySlug(
slug: string,
): CancelablePromise<UrlRecordDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetBySlug`,
            query: {
                'slug': slug,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a URL record
     * @param requestBody URL record Dto model
     * @returns UrlRecordDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: UrlRecordDto,
): CancelablePromise<UrlRecordDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/UrlRecord/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a URL records
     * @param ids Array of URL record identifiers (separator - ;)
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
ids: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/UrlRecord/Delete/${ids}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Find slug
     * @param entityId Entity identifier
     * @param entityName Entity name
     * @param languageId Language identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getGetActiveSlug(
entityId: number,
entityName: string,
languageId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetActiveSlug/${entityId}/${languageId}`,
            query: {
                'entityName': entityName,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get search engine friendly name (slug)
     * @param entityId Entity identifier
     * @param entityName Entity name
     * @param languageId Language identifier; pass null to use the current language
     * @param returnDefaultValue A value indicating whether to return default value (if language specified one is not found)
     * @param ensureTwoPublishedLanguages A value indicating whether to ensure that we have at least two published languages; otherwise, load only default value
     * @returns string Success
     * @throws ApiError
     */
    public static getGetSeName(
entityId: number,
entityName: string,
languageId?: number,
returnDefaultValue: boolean = true,
ensureTwoPublishedLanguages: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetSeName/${entityId}`,
            query: {
                'entityName': entityName,
                'languageId': languageId,
                'returnDefaultValue': returnDefaultValue,
                'ensureTwoPublishedLanguages': ensureTwoPublishedLanguages,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get SE name
     * @param name Name
     * @param convertNonWesternChars A value indicating whether non western chars should be converted
     * @param allowUnicodeCharsInUrls A value indicating whether Unicode chars are allowed
     * @returns string Success
     * @throws ApiError
     */
    public static getGetSeName1(
name: string,
convertNonWesternChars: boolean,
allowUnicodeCharsInUrls: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/UrlRecord/GetSeName`,
            query: {
                'name': name,
                'convertNonWesternChars': convertNonWesternChars,
                'allowUnicodeCharsInUrls': allowUnicodeCharsInUrls,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate search engine name
     * @param entityName Entity name
     * @param seName Search engine name to validate
     * @param name User-friendly name used to generate sename
     * @param ensureNotEmpty Ensure that sename is not empty
     * @param entityId Entity
     * @returns string Success
     * @throws ApiError
     */
    public static postValidateSeName(
entityName: string,
seName: string,
name: string,
ensureNotEmpty: boolean,
entityId?: number,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/UrlRecord/ValidateSeName/entityId`,
            query: {
                'entityId': entityId,
                'entityName': entityName,
                'seName': seName,
                'name': name,
                'ensureNotEmpty': ensureNotEmpty,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Save slug
     * @param languageId 
     * @param entityId 
     * @param entityTypeName 
     * @param slug 
     * @returns void 
     * @throws ApiError
     */
    public static postSaveSlug(
languageId: number,
entityId: number,
entityTypeName: string,
slug: string,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-backend/UrlRecord/SaveSlug/${languageId}/${entityId}`,
            query: {
                'entityTypeName': entityTypeName,
                'slug': slug,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}