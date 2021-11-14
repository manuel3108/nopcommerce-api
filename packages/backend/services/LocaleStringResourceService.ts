/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32StringKeyValuePair } from '../models/Int32StringKeyValuePair';
import type { LocaleStringResourceDto } from '../models/LocaleStringResourceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LocaleStringResourceService {

    /**
     * Delete a locale string resource
     * @param id Locale string resource identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/LocaleStringResource/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a locale string resource by identifier
     * @param id The locale string resource identifier
     * @returns LocaleStringResourceDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<LocaleStringResourceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/LocaleStringResource/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a locale string resource by name
     * @param resourceName A string representing a resource name
     * @param languageId Language identifier
     * @param logIfNotFound A value indicating whether to log error if locale string resource is not found
     * @returns LocaleStringResourceDto Success
     * @throws ApiError
     */
    public static getGetByName(
resourceName: string,
languageId: number,
logIfNotFound: boolean = true,
): CancelablePromise<LocaleStringResourceDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/LocaleStringResource/GetByName/${languageId}`,
            query: {
                'resourceName': resourceName,
                'logIfNotFound': logIfNotFound,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a locale string resource
     * @param requestBody Locale string resource Dto model
     * @returns LocaleStringResourceDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: LocaleStringResourceDto,
): CancelablePromise<LocaleStringResourceDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/LocaleStringResource/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update the locale string resource
     * @param requestBody Locale string resource Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: LocaleStringResourceDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/LocaleStringResource/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all locale string resources by language identifier
     * @param languageId Language identifier
     * @param loadPublicLocales A value indicating whether to load data for the public store only (if "false", then for admin area only. If null, then load all locales. We use it for performance optimization of the site startup
     * @returns Int32StringKeyValuePair Success
     * @throws ApiError
     */
    public static getGetAllResourceValues(
languageId: number,
loadPublicLocales?: boolean,
): CancelablePromise<Record<string, Int32StringKeyValuePair>> {
        return __request({
            method: 'GET',
            path: `/api-backend/LocaleStringResource/GetAllResourceValues/${languageId}`,
            query: {
                'loadPublicLocales': loadPublicLocales,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a resource string based on the specified ResourceKey property.
     * @param resourceKey A string representing a ResourceKey.
     * @param languageId Language identifier
     * @param logIfNotFound A value indicating whether to log error if locale string resource is not found
     * @param defaultValue Default value
     * @param returnEmptyIfNotFound A value indicating whether an empty string will be returned if a resource is not found and default value is set to empty string
     * @returns string Success
     * @throws ApiError
     */
    public static getGetResource(
resourceKey: string,
languageId: number,
logIfNotFound: boolean = true,
defaultValue: string = '',
returnEmptyIfNotFound: boolean = false,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/LocaleStringResource/GetResource/${languageId}`,
            query: {
                'resourceKey': resourceKey,
                'logIfNotFound': logIfNotFound,
                'defaultValue': defaultValue,
                'returnEmptyIfNotFound': returnEmptyIfNotFound,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Add a locale resource (if new) or update an existing one
     * @param resourceName Resource name
     * @param resourceValue Resource value
     * @param languageCulture Language culture code. If null or empty, then a resource will be added for all languages
     * @returns any Success
     * @throws ApiError
     */
    public static putAddOrUpdateLocaleResource(
resourceName: string,
resourceValue: string,
languageCulture?: string,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/LocaleStringResource/AddOrUpdateLocaleResource`,
            query: {
                'resourceName': resourceName,
                'resourceValue': resourceValue,
                'languageCulture': languageCulture,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a locale resource by name (for all languages)
     * @param resourceName Resource name
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteLocaleResource(
resourceName: string,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/LocaleStringResource/DeleteLocaleResource`,
            query: {
                'resourceName': resourceName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete locale resources
     * @param resourceNames Resource names (Separator - ;)
     * @param languageId Language identifier; pass null to delete the passed resources from all languages
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteLocaleResources(
resourceNames: string,
languageId?: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/LocaleStringResource/DeleteLocaleResources`,
            query: {
                'resourceNames': resourceNames,
                'languageId': languageId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete locale resources by the passed name prefix
     * @param resourceNamePrefix Resource name prefix
     * @param languageId Language identifier; pass null to delete resources by prefix from all languages
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteLocaleResourcesByPrefix(
resourceNamePrefix: string,
languageId?: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/LocaleStringResource/DeleteLocaleResourcesByPrefix`,
            query: {
                'resourceNamePrefix': resourceNamePrefix,
                'languageId': languageId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}