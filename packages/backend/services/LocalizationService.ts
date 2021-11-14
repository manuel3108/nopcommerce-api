/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LocalizationService {

    /**
     * Get localized value of enum
     * @param enumeTypeName Enume type name
     * @param enumValue Enum value
     * @param languageId Language identifier; pass null to use the current working language
     * @returns string Success
     * @throws ApiError
     */
    public static getGetLocalizedEnum(
enumeTypeName: string,
enumValue: string,
languageId?: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Localization/GetLocalizedEnum`,
            query: {
                'enumeTypeName': enumeTypeName,
                'enumValue': enumValue,
                'languageId': languageId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get localized friendly name of a plugin
     * @param pluginSystemName Plugin
     * @param pluginFriendlyName Plugin
     * @param languageId Language identifier
     * @param returnDefaultValue A value indicating whether to return default value (if localized is not found)
     * @returns string Success
     * @throws ApiError
     */
    public static getGetLocalizedFriendlyName(
pluginSystemName: string,
pluginFriendlyName: string,
languageId: number,
returnDefaultValue: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Localization/GetLocalizedFriendlyName/${languageId}`,
            query: {
                'pluginSystemName': pluginSystemName,
                'pluginFriendlyName': pluginFriendlyName,
                'returnDefaultValue': returnDefaultValue,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get localized property of an entity
     * @param entityId Entity identifier
     * @param localeKeyGroup Locale key group
     * @param localeKey Locale key
     * @param languageId Language identifier; pass null to use the current working language; pass 0 to get standard language value
     * @param ensureTwoPublishedLanguages A value indicating whether to ensure that we have at least two published languages; otherwise, load only default value
     * @returns string Success
     * @throws ApiError
     */
    public static getGetLocalized(
entityId: number,
localeKeyGroup: string,
localeKey: string,
languageId?: number,
ensureTwoPublishedLanguages: boolean = true,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Localization/GetLocalized/${entityId}`,
            query: {
                'localeKeyGroup': localeKeyGroup,
                'localeKey': localeKey,
                'languageId': languageId,
                'ensureTwoPublishedLanguages': ensureTwoPublishedLanguages,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}