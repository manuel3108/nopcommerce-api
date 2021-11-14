/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateAdminRequest } from '../models/AuthenticateAdminRequest';
import type { AuthenticateResponse } from '../models/AuthenticateResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AuthenticateService {

    /**
     * Authenticate admin
     * @param requestBody 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static postGetToken(
requestBody?: AuthenticateAdminRequest,
): CancelablePromise<AuthenticateResponse> {
        return __request({
            method: 'POST',
            path: `/api-backend/Authenticate/GetToken`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}