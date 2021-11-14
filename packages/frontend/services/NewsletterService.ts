/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionActivationModelDto } from '../models/SubscriptionActivationModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class NewsletterService {

    /**
     * @param email 
     * @param subscribe 
     * @returns string Success
     * @throws ApiError
     */
    public static getSubscribeNewsletter(
email: string,
subscribe: boolean,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Newsletter/SubscribeNewsletter`,
            query: {
                'email': email,
                'subscribe': subscribe,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param token 
     * @param active 
     * @returns SubscriptionActivationModelDto Success
     * @throws ApiError
     */
    public static getSubscriptionActivation(
token: string,
active: boolean,
): CancelablePromise<SubscriptionActivationModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Newsletter/SubscriptionActivation`,
            query: {
                'token': token,
                'active': active,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}