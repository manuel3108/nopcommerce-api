/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TopicModelDto } from '../models/TopicModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class TopicService {

    /**
     * Gets a topic details
     * @param id The topic identifier
     * @returns TopicModelDto Success
     * @throws ApiError
     */
    public static getGetTopicDetails(
id: number,
): CancelablePromise<TopicModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Topic/GetTopicDetails/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}