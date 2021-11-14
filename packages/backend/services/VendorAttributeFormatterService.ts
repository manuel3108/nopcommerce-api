/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorAttributeFormatterService {

    /**
     * Format vendor attributes
     * @param separator Separator
     * @param htmlEncode A value indicating whether to encode (HTML) values
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatAttributes(
separator: string = '<br />',
htmlEncode: boolean = true,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/VendorAttributeFormatter/FormatAttributes`,
            query: {
                'separator': separator,
                'htmlEncode': htmlEncode,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}