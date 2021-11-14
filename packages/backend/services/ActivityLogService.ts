/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityLogActivityLogDtoPagedListDto } from '../models/ActivityLogActivityLogDtoPagedListDto';
import type { ActivityLogDto } from '../models/ActivityLogDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityLogService {

    /**
     * Gets all activity log items
     * @param createdOnFrom Log item creation from; pass null to load all records
     * @param createdOnTo Log item creation to; pass null to load all records
     * @param customerId Customer identifier; pass null to load all records
     * @param activityLogTypeId Activity log type identifier; pass null to load all records
     * @param ipAddress IP address; pass null or empty to load all records
     * @param entityName Entity name; pass null to load all records
     * @param entityId Entity identifier; pass null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ActivityLogActivityLogDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
createdOnFrom?: string,
createdOnTo?: string,
customerId?: number,
activityLogTypeId?: number,
ipAddress?: string,
entityName?: string,
entityId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ActivityLogActivityLogDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ActivityLog/GetAll`,
            query: {
                'createdOnFrom': createdOnFrom,
                'createdOnTo': createdOnTo,
                'customerId': customerId,
                'activityLogTypeId': activityLogTypeId,
                'ipAddress': ipAddress,
                'entityName': entityName,
                'entityId': entityId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an activity log item by identifier
     * @param id The activity log identifier
     * @returns ActivityLogDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ActivityLogDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ActivityLog/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Clears activity log
     * @returns void 
     * @throws ApiError
     */
    public static deleteClearAllActivities(): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ActivityLog/ClearAllActivities`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Inserts an activity log item
     * @param customerId Customer
     * @param systemKeyword System keyword
     * @param comment Comment
     * @returns ActivityLogDto Success
     * @throws ApiError
     */
    public static putInsertActivity(
customerId: number,
systemKeyword: string,
comment: string,
): CancelablePromise<ActivityLogDto> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ActivityLog/InsertActivity/${customerId}`,
            query: {
                'systemKeyword': systemKeyword,
                'comment': comment,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}