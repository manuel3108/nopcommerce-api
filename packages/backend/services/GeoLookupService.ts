/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GeoLookupService {

    /**
     * Get country ISO code
     * @param ipAddress IP address
     * @returns string Success
     * @throws ApiError
     */
    public static getLookupCountryIsoCode(
ipAddress: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/GeoLookup/LookupCountryIsoCode`,
            query: {
                'ipAddress': ipAddress,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get country name
     * @param ipAddress IP address
     * @returns string Success
     * @throws ApiError
     */
    public static getLookupCountryName(
ipAddress: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/GeoLookup/LookupCountryName`,
            query: {
                'ipAddress': ipAddress,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}