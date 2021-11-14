/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CheckoutAttributeFormatterService {

    /**
     * Formats attributes
     * @param customerId Customer Id
     * @param separator Separator
     * @param htmlEncode A value indicating whether to encode (HTML) values
     * @param renderPrices A value indicating whether to render prices
     * @param allowHyperlinks A value indicating whether to HTML hyperlink tags could be rendered (if required)
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatAttributes(
customerId: number,
separator: string = '<br />',
htmlEncode: boolean = true,
renderPrices: boolean = true,
allowHyperlinks: boolean = true,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/CheckoutAttributeFormatter/FormatAttributes/${customerId}`,
            query: {
                'separator': separator,
                'htmlEncode': htmlEncode,
                'renderPrices': renderPrices,
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