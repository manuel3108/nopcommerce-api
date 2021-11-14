/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScheduleTaskDto } from '../models/ScheduleTaskDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ScheduleTaskService {

    /**
     * Gets all schedule tasks
     * @param showHidden A value indicating whether to show hidden records
     * @returns ScheduleTaskDto Success
     * @throws ApiError
     */
    public static getGetAll(
showHidden: boolean = false,
): CancelablePromise<Array<ScheduleTaskDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ScheduleTask/GetAll`,
            query: {
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a task by identifier
     * @param id Task identifier
     * @returns ScheduleTaskDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ScheduleTaskDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ScheduleTask/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a schedule task by its type
     * @param type Task type
     * @returns ScheduleTaskDto Success
     * @throws ApiError
     */
    public static getGetByType(
type: string,
): CancelablePromise<ScheduleTaskDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ScheduleTask/GetByType`,
            query: {
                'type': type,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a task
     * @param requestBody Schedule task Dto model
     * @returns ScheduleTaskDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ScheduleTaskDto,
): CancelablePromise<ScheduleTaskDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ScheduleTask/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a task
     * @param requestBody Schedule task Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ScheduleTaskDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/ScheduleTask/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a task
     * @param id Task identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/ScheduleTask/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}