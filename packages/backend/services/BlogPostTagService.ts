/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class BlogPostTagService {

    /**
     * Gets all blog post tags
     * @param storeId The store identifier; pass 0 to load all records
     * @param languageId Language identifier. 0 if you want to get all blog posts
     * @param showHidden A value indicating whether to show hidden records
     * @returns void 
     * @throws ApiError
     */
    public static getGetAll(
storeId: number,
languageId: number,
showHidden: boolean = false,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/BlogPostTag/GetAll/${storeId}/${languageId}`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}