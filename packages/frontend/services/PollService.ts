/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PollModelDto } from '../models/PollModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PollService {

    /**
     * @param pollAnswerId 
     * @returns PollModelDto Success
     * @throws ApiError
     */
    public static getVote(
pollAnswerId: number,
): CancelablePromise<PollModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Poll/Vote/${pollAnswerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}