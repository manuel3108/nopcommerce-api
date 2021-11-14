/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AffiliateDto } from '../models/AffiliateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AffiliatesService {

    /**
     * Gets all affiliates
     * @param friendlyUrlName Friendly URL name; null to load all records
     * @param firstName First name; null to load all records
     * @param lastName Last name; null to load all records
     * @param loadOnlyWithOrders Value indicating whether to load affiliates only with orders placed (by affiliated customers)
     * @param ordersCreatedFromUtc Orders created date from (UTC); null to load all records. It's used only with "loadOnlyWithOrders" parameter st to "true".
     * @param ordersCreatedToUtc Orders created date to (UTC); null to load all records. It's used only with "loadOnlyWithOrders" parameter st to "true".
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns AffiliateDto Success
     * @throws ApiError
     */
    public static getGetAll(
friendlyUrlName?: string,
firstName?: string,
lastName?: string,
loadOnlyWithOrders: boolean = false,
ordersCreatedFromUtc?: string,
ordersCreatedToUtc?: string,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<Array<AffiliateDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/GetAll`,
            query: {
                'friendlyUrlName': friendlyUrlName,
                'firstName': firstName,
                'lastName': lastName,
                'loadOnlyWithOrders': loadOnlyWithOrders,
                'ordersCreatedFromUtc': ordersCreatedFromUtc,
                'ordersCreatedToUtc': ordersCreatedToUtc,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an affiliate
     * @param id Affiliate identifier
     * @returns AffiliateDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<AffiliateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets an affiliate
     * @param friendlyUrlName Affiliate friendly url name
     * @returns AffiliateDto Success
     * @throws ApiError
     */
    public static getGetByFriendlyUrlName(
friendlyUrlName: string,
): CancelablePromise<AffiliateDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/GetByFriendlyUrlName`,
            query: {
                'friendlyUrlName': friendlyUrlName,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create affiliate
     * @param requestBody Affiliate Dto
     * @returns AffiliateDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: AffiliateDto,
): CancelablePromise<AffiliateDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Affiliates/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update affiliate by Id
     * @param requestBody Affiliate Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: AffiliateDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Affiliates/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete affiliate
     * @param id Affiliate identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Affiliates/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get full name
     * @param affiliateId Affiliate Id
     * @returns string Success
     * @throws ApiError
     */
    public static getGetAffiliateFullName(
affiliateId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/GetAffiliateFullName/${affiliateId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Generate affiliate URL
     * @param affiliateId Affiliate Id
     * @returns string Success
     * @throws ApiError
     */
    public static getGenerateUrl(
affiliateId: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/GenerateUrl/${affiliateId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validate friendly URL name
     * @param affiliateId Affiliate Id
     * @param friendlyUrlName Friendly URL name
     * @returns string Success
     * @throws ApiError
     */
    public static getValidateFriendlyUrlName(
affiliateId: number,
friendlyUrlName: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Affiliates/ValidateFriendlyUrlName/${affiliateId}`,
            query: {
                'friendlyUrlName': friendlyUrlName,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}