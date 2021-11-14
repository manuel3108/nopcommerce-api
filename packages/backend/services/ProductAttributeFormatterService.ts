/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductAttributeFormatterService {

    /**
     * Formats attributes
     * @param productId Product Id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatAttributes(
productId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeFormatter/FormatAttributes/${productId}`,
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
     * Formats attributes
     * @param productId Product
     * @param customerId Customer
     * @param separator Separator
     * @param htmlEncode A value indicating whether to encode (HTML) values
     * @param renderPrices A value indicating whether to render prices
     * @param renderProductAttributes A value indicating whether to render product attributes
     * @param renderGiftCardAttributes A value indicating whether to render gift card attributes
     * @param allowHyperlinks A value indicating whether to HTML hyperink tags could be rendered (if required)
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatAttributes1(
productId: number,
customerId: number,
separator: string = '<br />',
htmlEncode: boolean = true,
renderPrices: boolean = true,
renderProductAttributes: boolean = true,
renderGiftCardAttributes: boolean = true,
allowHyperlinks: boolean = true,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/ProductAttributeFormatter/FormatAttributes/${productId}/${customerId}`,
            query: {
                'separator': separator,
                'htmlEncode': htmlEncode,
                'renderPrices': renderPrices,
                'renderProductAttributes': renderProductAttributes,
                'renderGiftCardAttributes': renderGiftCardAttributes,
                'allowHyperlinks': allowHyperlinks,
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

}