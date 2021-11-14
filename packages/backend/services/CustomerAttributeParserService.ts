/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerAttributeDto } from '../models/CustomerAttributeDto';
import type { CustomerAttributeValueDto } from '../models/CustomerAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerAttributeParserService {

    /**
     * Gets selected customer attributes
     * @param requestBody Attributes in XML format
     * @returns CustomerAttributeDto Success
     * @throws ApiError
     */
    public static postParseCustomerAttributes(
requestBody?: string,
): CancelablePromise<Array<CustomerAttributeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttributeParser/ParseCustomerAttributes`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get customer attribute values
     * @param requestBody Attributes in XML format
     * @returns CustomerAttributeValueDto Success
     * @throws ApiError
     */
    public static postParseCustomerAttributeValues(
requestBody?: string,
): CancelablePromise<Array<CustomerAttributeValueDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttributeParser/ParseCustomerAttributeValues`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets selected customer attribute value
     * @param attributeId Customer attribute identifier
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
            path: `/api-backend/CustomerAttributeParser/ParseValues/${attributeId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds an attribute
     * @param customerAttributeId Customer attribute
     * @param value Value
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddCustomerAttribute(
customerAttributeId: number,
value: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttributeParser/AddCustomerAttribute/${customerAttributeId}`,
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
     * Validates customer attributes
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postGetAttributeWarnings(
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CustomerAttributeParser/GetAttributeWarnings`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}