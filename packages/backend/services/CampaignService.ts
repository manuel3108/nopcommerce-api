/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CampaignDto } from '../models/CampaignDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CampaignService {

    /**
     * Create a campaign
     * @param requestBody Campaign Dto model
     * @returns CampaignDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: CampaignDto,
): CancelablePromise<CampaignDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Campaign/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a campaign
     * @param requestBody Campaign Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: CampaignDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Campaign/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a campaign
     * @param id Campaign identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Campaign/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a campaign by identifier
     * @param id The campaign identifier
     * @returns CampaignDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<CampaignDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Campaign/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all campaigns
     * @param storeId Store identifier; 0 to load all records
     * @returns CampaignDto Success
     * @throws ApiError
     */
    public static getGetAll(
storeId?: number,
): CancelablePromise<Array<CampaignDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Campaign/GetAll`,
            query: {
                'storeId': storeId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Sends a campaign to specified emails
     * @param id The campaign identifier
     * @param emailAccountId Email account identifier
     * @param subscriptionIds Subscription identifiers (separator - ;)
     * @returns number Success
     * @throws ApiError
     */
    public static getSendCampaignToEmails(
id: number,
emailAccountId: number,
subscriptionIds: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Campaign/SendCampaignToEmails/${id}/${emailAccountId}/${subscriptionIds}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Sends a campaign to specified email
     * @param id The campaign identifier
     * @param emailAccountId Email account identifier
     * @param email Email
     * @returns any Success
     * @throws ApiError
     */
    public static getSendCampaignToEmail(
id: number,
emailAccountId: number,
email: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Campaign/SendCampaignToEmail/${id}/${emailAccountId}`,
            query: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}