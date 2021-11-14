/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorAttributeDto } from '../models/VendorAttributeDto';
import type { VendorAttributeValueDto } from '../models/VendorAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorAttributeParserService {

    /**
     * Gets vendor attributes from XML
     * @param requestBody Attributes in XML format
     * @returns VendorAttributeDto Success
     * @throws ApiError
     */
    public static postParseVendorAttributes(
requestBody?: string,
): CancelablePromise<Array<VendorAttributeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeParser/ParseVendorAttributes`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get vendor attribute values from XML
     * @param requestBody Attributes in XML format
     * @returns VendorAttributeValueDto Success
     * @throws ApiError
     */
    public static postParseVendorAttributeValues(
requestBody?: string,
): CancelablePromise<Array<VendorAttributeValueDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeParser/ParseVendorAttributeValues`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets values of the selected vendor attribute
     * @param attributeId Vendor attribute identifier
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postParseValues(
attributeId: number,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeParser/ParseValues/${attributeId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds a vendor attribute
     * @param vendorAttributeId Vendor attribute Id
     * @param value Value
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddVendorAttribute(
vendorAttributeId: number,
value: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeParser/AddVendorAttribute/${vendorAttributeId}`,
            query: {
                'value': value,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Validates vendor attributes
     * @param requestBody 
     * @returns string Success
     * @throws ApiError
     */
    public static postGetAttributeWarnings(
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeParser/GetAttributeWarnings`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}