/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AreProductAttributesEqualRequest } from '../models/AreProductAttributesEqualRequest';
import type { GiftCardAttributeResponse } from '../models/GiftCardAttributeResponse';
import type { ProductAttributeCombinationDto } from '../models/ProductAttributeCombinationDto';
import type { ProductAttributeMappingDto } from '../models/ProductAttributeMappingDto';
import type { ProductAttributeValueDto } from '../models/ProductAttributeValueDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeParserService {

    /**
     * Gets selected product attribute mappings
     * @param requestBody Attributes in XML format
     * @returns ProductAttributeMappingDto Success
     * @throws ApiError
     */
    public static postParseProductAttributeMappings(
requestBody?: string,
): CancelablePromise<Array<ProductAttributeMappingDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/ParseProductAttributeMappings`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get product attribute values
     * @param mappingId Product attribute mapping identifier; pass 0 to load all values
     * @param requestBody Attributes in XML format
     * @returns ProductAttributeValueDto Success
     * @throws ApiError
     */
    public static postParseProductAttributeValues(
mappingId?: number,
requestBody?: string,
): CancelablePromise<Array<ProductAttributeValueDto>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/ParseProductAttributeValues`,
            query: {
                'mappingId': mappingId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets selected product attribute values
     * @param mappingId Product attribute mapping identifier
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postParseValues(
mappingId: number,
requestBody?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/ParseValues/${mappingId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Adds an attribute
     * @param productAttributeMappingId Product attribute mapping
     * @param value Value
     * @param quantity Quantity (used with AttributeValueType.AssociatedToProduct to specify the quantity entered by the customer)
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddProductAttribute(
productAttributeMappingId: number,
value?: string,
quantity?: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/AddProductAttribute/${productAttributeMappingId}`,
            query: {
                'value': value,
                'quantity': quantity,
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
     * Remove an attribute
     * @param mappingId Product attribute mapping id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postRemoveProductAttribute(
mappingId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/RemoveProductAttribute/${mappingId}`,
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
     * Are attributes equal
     * @param ignoreNonCombinableAttributes A value indicating whether we should ignore non-combinable attributes
     * @param ignoreQuantity A value indicating whether we should ignore the quantity of attribute value entered by the customer
     * @param requestBody The attributes of the compared products
     * @returns boolean Success
     * @throws ApiError
     */
    public static postAreProductAttributesEqual(
ignoreNonCombinableAttributes: boolean,
ignoreQuantity: boolean = true,
requestBody?: AreProductAttributesEqualRequest,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/AreProductAttributesEqual`,
            query: {
                'ignoreNonCombinableAttributes': ignoreNonCombinableAttributes,
                'ignoreQuantity': ignoreQuantity,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Check whether condition of some attribute is met (if specified). Return "null" if not condition is specified
     * @param mappingId Product attribute mapping Id
     * @param requestBody Selected attributes (XML format)
     * @returns boolean Success
     * @throws ApiError
     */
    public static postIsConditionMet(
mappingId: number,
requestBody?: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/IsConditionMet/${mappingId}`,
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
     * Finds a product attribute combination by attributes stored in XML
     * @param productId Product
     * @param ignoreNonCombinableAttributes A value indicating whether we should ignore non-combinable attributes
     * @param requestBody Attributes in XML format
     * @returns ProductAttributeCombinationDto Success
     * @throws ApiError
     */
    public static postFindProductAttributeCombination(
productId: number,
ignoreNonCombinableAttributes: boolean = true,
requestBody?: string,
): CancelablePromise<ProductAttributeCombinationDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/FindProductAttributeCombination/${productId}`,
            query: {
                'ignoreNonCombinableAttributes': ignoreNonCombinableAttributes,
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
     * Generate all combinations
     * @param productId Product
     * @param ignoreNonCombinableAttributes A value indicating whether we should ignore non-combinable attributes
     * @param ids List of allowed attribute identifiers (separator - ;). If null or empty then all attributes would be used.
     * @returns string Success
     * @throws ApiError
     */
    public static getGenerateAllCombinations(
productId: number,
ignoreNonCombinableAttributes: boolean = false,
ids?: string,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ProductAttributeParser/GenerateAllCombinations/${productId}`,
            query: {
                'ignoreNonCombinableAttributes': ignoreNonCombinableAttributes,
                'ids': ids,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Add gift card attributes
     * @param recipientName Recipient name
     * @param recipientEmail Recipient email
     * @param senderName Sender name
     * @param senderEmail Sender email
     * @param giftCardMessage Message
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postAddGiftCardAttribute(
recipientName: string,
recipientEmail: string,
senderName: string,
senderEmail: string,
giftCardMessage: string,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/AddGiftCardAttribute`,
            query: {
                'recipientName': recipientName,
                'recipientEmail': recipientEmail,
                'senderName': senderName,
                'senderEmail': senderEmail,
                'giftCardMessage': giftCardMessage,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get gift card attributes
     * @param requestBody Attributes in XML format
     * @returns GiftCardAttributeResponse Success
     * @throws ApiError
     */
    public static postGetGiftCardAttribute(
requestBody?: string,
): CancelablePromise<GiftCardAttributeResponse> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeParser/GetGiftCardAttribute`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}