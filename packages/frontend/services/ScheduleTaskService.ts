/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ScheduleTaskService {

    /**
     * Run task
     * @param taskType Task type
     * @returns any Success
     * @throws ApiError
     */
    public static getRunTask(
taskType: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-frontend/ScheduleTask/RunTask`,
            query: {
                'taskType': taskType,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}