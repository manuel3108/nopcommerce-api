/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutAttributeDto } from '../models/CheckoutAttributeDto';
import type { ParseCheckoutAttributeValuesResponse } from '../models/ParseCheckoutAttributeValuesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CheckoutAttributeParserService {

    /**
     * Gets selected checkout attributes
     * @param requestBody 
     * @returns CheckoutAttributeDto Success
     * @throws ApiError
     */
    public static postParseCheckoutAttributes(
requestBody?: string,
): CancelablePromise<Array<CheckoutAttributeDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeParser/ParseCheckoutAttributes`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get checkout attribute values
     * @param requestBody Attributes in XML format
     * @returns ParseCheckoutAttributeValuesResponse Success
     * @throws ApiError
     */
    public static postParseCheckoutAttributeValues(
requestBody?: string,
): CancelablePromise<Array<ParseCheckoutAttributeValuesResponse>> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeParser/ParseCheckoutAttributeValues`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets selected checkout attribute value
     * @param attributeId Checkout attribute identifier
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
            path: `/api-backend/CheckoutAttributeParser/ParseValues/${attributeId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds an attribute
     * @param checkoutAttributeId Checkout attribute
     * @param value Value
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddCheckoutAttribute(
checkoutAttributeId: number,
value: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeParser/AddCheckoutAttribute/${checkoutAttributeId}`,
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
     * Check whether condition of some attribute is met (if specified). Return "null" if not condition is specified
     * @param attributeId Checkout attribute Id
     * @param requestBody Selected attributes (XML format)
     * @returns boolean Success
     * @throws ApiError
     */
    public static postIsConditionMet(
attributeId: number,
requestBody?: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeParser/IsConditionMet/${attributeId}`,
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
     * Remove an attribute
     * @param attributeId Checkout attribute Id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postRemoveCheckoutAttribute(
attributeId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeParser/RemoveCheckoutAttribute/${attributeId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}