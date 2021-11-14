/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecurringPaymentDto } from '../models/RecurringPaymentDto';
import type { RecurringPaymentHistoryDto } from '../models/RecurringPaymentHistoryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RecurringPaymentHistoryService {

    /**
     * Gets a recurring payment history by recurring payment
     * @param id Recurring payment identifier
     * @returns RecurringPaymentHistoryDto Success
     * @throws ApiError
     */
    public static getGetByRecurringPaymentId(
id: number,
): CancelablePromise<Array<RecurringPaymentHistoryDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/RecurringPaymentHistory/GetByRecurringPaymentId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an recurring payment history entry
     * @param requestBody Recurring payment history Dto model
     * @returns RecurringPaymentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: RecurringPaymentHistoryDto,
): CancelablePromise<RecurringPaymentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/RecurringPaymentHistory/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}