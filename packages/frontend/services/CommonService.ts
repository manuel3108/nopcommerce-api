/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactUsModelDto } from '../models/ContactUsModelDto';
import type { ContactVendorModelDto } from '../models/ContactVendorModelDto';
import type { RobotsTextFileResponse } from '../models/RobotsTextFileResponse';
import type { SitemapModelDto } from '../models/SitemapModelDto';
import type { SitemapPageModelDto } from '../models/SitemapPageModelDto';
import type { SitemapXmlResponse } from '../models/SitemapXmlResponse';
import type { TaxDisplayType } from '../models/TaxDisplayType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CommonService {

    /**
     * Set language
     * @param langId 
     * @param returnUrl 
     * @returns string Success
     * @throws ApiError
     */
    public static postSetLanguage(
langId: number,
returnUrl: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/SetLanguage/${langId}`,
            query: {
                'returnUrl': returnUrl,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Set currency
     * @param customerCurrencyId 
     * @param returnUrl 
     * @returns string Success
     * @throws ApiError
     */
    public static postSetCurrency(
customerCurrencyId: number,
returnUrl: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/SetCurrency/${customerCurrencyId}`,
            query: {
                'returnUrl': returnUrl,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Set tax type
     * @param customerTaxType 
     * @param returnUrl 
     * @returns string Success
     * @throws ApiError
     */
    public static postSetTaxType(
customerTaxType: TaxDisplayType,
returnUrl: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/SetTaxType`,
            query: {
                'customerTaxType': customerTaxType,
                'returnUrl': returnUrl,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Contact us page
     * @returns ContactUsModelDto Success
     * @throws ApiError
     */
    public static getContactUs(): CancelablePromise<ContactUsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/ContactUs`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Contact us send
     * @param requestBody 
     * @returns ContactUsModelDto Success
     * @throws ApiError
     */
    public static postContactUsSend(
requestBody?: ContactUsModelDto,
): CancelablePromise<ContactUsModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/ContactUsSend`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * contact vendor page
     * @param vendorId Vendor identifier
     * @returns ContactVendorModelDto Success
     * @throws ApiError
     */
    public static getContactVendor(
vendorId: number,
): CancelablePromise<ContactVendorModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/ContactVendor/${vendorId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Contact vendor vend
     * @param requestBody 
     * @returns ContactVendorModelDto Success
     * @throws ApiError
     */
    public static postContactVendorSend(
requestBody?: ContactVendorModelDto,
): CancelablePromise<ContactVendorModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/ContactVendorSend`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * sitemap page
     * @param requestBody 
     * @returns SitemapModelDto Success
     * @throws ApiError
     */
    public static postSitemap(
requestBody?: SitemapPageModelDto,
): CancelablePromise<SitemapModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Common/Sitemap`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * SEO sitemap page
     * @param id Sitemap identifier; pass 0 to load the first sitemap or sitemap index file
     * @returns SitemapXmlResponse Success
     * @throws ApiError
     */
    public static getSitemapXml(
id: number,
): CancelablePromise<SitemapXmlResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/SitemapXml/${id}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Set store theme
     * @param themeName Theme name
     * @returns void 
     * @throws ApiError
     */
    public static getSetStoreTheme(
themeName: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/SetStoreTheme`,
            query: {
                'themeName': themeName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Eu cookie law accept
     * @returns boolean Success
     * @throws ApiError
     */
    public static getEuCookieLawAccept(): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/EuCookieLawAccept`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * robots.txt file
     * @returns RobotsTextFileResponse Success
     * @throws ApiError
     */
    public static getRobotsTextFile(): CancelablePromise<RobotsTextFileResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Common/RobotsTextFile`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}