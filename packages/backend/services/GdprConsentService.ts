/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GdprConsentDto } from '../models/GdprConsentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GdprConsentService {

    /**
     * Gets a GDPR consent by identifier
     * @param id The GDPR consent identifier
     * @returns GdprConsentDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<GdprConsentDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/GdprConsent/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all GDPR consents
     * @returns GdprConsentDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<GdprConsentDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/GdprConsent/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a GDPR consent
     * @param requestBody GDPR consent Dto model
     * @returns GdprConsentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: GdprConsentDto,
): CancelablePromise<GdprConsentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/GdprConsent/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a GDPR consent
     * @param requestBody GDPR consent Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: GdprConsentDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/GdprConsent/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a GDPR consent
     * @param id GDPR consent identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/GdprConsent/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the latest selected value (a consent is accepted or not by a customer)
     * @param consentId Consent identifier
     * @param customerId Customer identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsConsentAccepted(
consentId: number,
customerId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/GdprConsent/IsConsentAccepted/${consentId}/${customerId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}