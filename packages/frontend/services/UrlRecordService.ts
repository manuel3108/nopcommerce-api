/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UrlRecordDto } from '../models/UrlRecordDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UrlRecordService {

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
            path: `/api-frontend/UrlRecord/GetBySlug`,
            query: {
                'slug': slug,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}