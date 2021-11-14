/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateCustomerRequest } from '../models/AuthenticateCustomerRequest';
import type { AuthenticateResponse } from '../models/AuthenticateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AuthenticateService {

    /**
     * Authenticate user
     * @param requestBody 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static postGetToken(
requestBody?: AuthenticateCustomerRequest,
): CancelablePromise<AuthenticateResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Authenticate/GetToken`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}