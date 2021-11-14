/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GdprLogGdprLogDtoPagedListDto } from '../models/GdprLogGdprLogDtoPagedListDto';
import type { GdprRequestType } from '../models/GdprRequestType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GdprLogService {

    /**
     * Get all GDPR log records
     * @param customerId Customer identifier
     * @param consentId Consent identifier
     * @param customerInfo Customer info (Exact match)
     * @param requestType GDPR request type
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns GdprLogGdprLogDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
customerId?: number,
consentId?: number,
customerInfo: string = '',
requestType?: GdprRequestType,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<GdprLogGdprLogDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/GdprLog/GetAll`,
            query: {
                'customerId': customerId,
                'consentId': consentId,
                'customerInfo': customerInfo,
                'requestType': requestType,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}