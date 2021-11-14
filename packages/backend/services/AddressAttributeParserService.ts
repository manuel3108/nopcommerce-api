/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressAttributeDto } from '../models/AddressAttributeDto';
import type { AddressAttributeValueDto } from '../models/AddressAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AddressAttributeParserService {

    /**
     * Gets selected address attributes
     * @param requestBody Attributes in XML format
     * @returns AddressAttributeDto Success
     * @throws ApiError
     */
    public static postParseAddressAttributes(
requestBody?: string,
): CancelablePromise<Array<AddressAttributeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeParser/ParseAddressAttributes`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get address attribute values
     * @param requestBody Attributes in XML format
     * @returns AddressAttributeValueDto Success
     * @throws ApiError
     */
    public static postParseAddressAttributeValues(
requestBody?: string,
): CancelablePromise<Array<AddressAttributeValueDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeParser/ParseAddressAttributeValues`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets selected address attribute value
     * @param addressAttributeId Address attribute identifier
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postParseValues(
addressAttributeId: number,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeParser/ParseValues/${addressAttributeId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds an attribute
     * @param addressAttributeId Address attribute
     * @param value Value
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddAddressAttribute(
addressAttributeId: number,
value: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeParser/AddAddressAttribute/${addressAttributeId}`,
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
     * Validates address attributes
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetAttributeWarnings(
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/AddressAttributeParser/GetAttributeWarnings`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}