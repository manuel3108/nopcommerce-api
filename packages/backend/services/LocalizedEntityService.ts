/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LocalizedEntityService {

    /**
     * Find localized value
     * @param languageId Language identifier
     * @param entityId Entity identifier
     * @param localeKeyGroup Locale key group
     * @param localeKey Locale key
     * @returns string Success
     * @throws ApiError
     */
    public static getGetLocalizedValue(
languageId: number,
entityId: number,
localeKeyGroup: string,
localeKey: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/LocalizedEntity/GetLocalizedValue/${languageId}/${entityId}`,
            query: {
                'localeKeyGroup': localeKeyGroup,
                'localeKey': localeKey,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Save localized value
     * @param languageId Language identifier
     * @param entityId Entity identifier
     * @param localeKeyGroup Locale key group
     * @param localeKey Locale key
     * @param requestBody Locale value
     * @returns any Success
     * @throws ApiError
     */
    public static postSaveLocalizedValue(
languageId: number,
entityId: number,
localeKeyGroup: string,
localeKey: string,
requestBody?: string,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/LocalizedEntity/SaveLocalizedValue/${languageId}/${entityId}`,
            query: {
                'localeKeyGroup': localeKeyGroup,
                'localeKey': localeKey,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}