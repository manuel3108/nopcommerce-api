/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GdprService {

    /**
     * Permanent delete of customer
     * @param customerId Customer identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deletePermanentDeleteCustomer(
customerId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Gdpr/PermanentDeleteCustomer/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}