/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfileIndexModelDto } from '../models/ProfileIndexModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProfileService {

    /**
     * @param id 
     * @param pageNumber 
     * @returns ProfileIndexModelDto Success
     * @throws ApiError
     */
    public static getIndex(
id?: number,
pageNumber?: number,
): CancelablePromise<ProfileIndexModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Profile/Index`,
            query: {
                'id': id,
                'pageNumber': pageNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}