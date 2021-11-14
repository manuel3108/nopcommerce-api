/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StateProvinceModelDto } from '../models/StateProvinceModelDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CountryService {

    /**
     * @param countryId 
     * @param addSelectStateItem 
     * @returns StateProvinceModelDto Success
     * @throws ApiError
     */
    public static getGetStatesByCountryId(
countryId: number,
addSelectStateItem: boolean,
): CancelablePromise<Array<StateProvinceModelDto>> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Country/GetStatesByCountryId/${countryId}`,
            query: {
                'addSelectStateItem': addSelectStateItem,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}