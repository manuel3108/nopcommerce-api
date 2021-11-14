/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityLogTypeDto } from '../models/ActivityLogTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityLogTypeService {

    /**
     * Update an activity log type item
     * @param requestBody Activity log type item Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ActivityLogTypeDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ActivityLogType/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all activity log type items
     * @returns ActivityLogTypeDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<ActivityLogTypeDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ActivityLogType/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an activity log type item by identifier
     * @param id The activity log type identifier
     * @returns ActivityLogTypeDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ActivityLogTypeDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ActivityLogType/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}