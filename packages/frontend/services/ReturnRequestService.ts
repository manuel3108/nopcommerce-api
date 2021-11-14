/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerReturnRequestsModelDto } from '../models/CustomerReturnRequestsModelDto';
import type { SubmitReturnRequestModelDto } from '../models/SubmitReturnRequestModelDto';
import type { SubmitReturnRequestModelDtoBaseModelDtoRequest } from '../models/SubmitReturnRequestModelDtoBaseModelDtoRequest';
import type { UploadFileResponse } from '../models/UploadFileResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ReturnRequestService {

    /**
     * @returns CustomerReturnRequestsModelDto Success
     * @throws ApiError
     */
    public static getCustomerReturnRequests(): CancelablePromise<CustomerReturnRequestsModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/ReturnRequest/CustomerReturnRequests`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param orderId 
     * @returns SubmitReturnRequestModelDto Success
     * @throws ApiError
     */
    public static getReturnRequest(
orderId: number,
): CancelablePromise<SubmitReturnRequestModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/ReturnRequest/ReturnRequest/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param orderId 
     * @param requestBody 
     * @returns SubmitReturnRequestModelDto Success
     * @throws ApiError
     */
    public static postReturnRequestSubmit(
orderId: number,
requestBody?: SubmitReturnRequestModelDtoBaseModelDtoRequest,
): CancelablePromise<SubmitReturnRequestModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ReturnRequest/ReturnRequestSubmit/${orderId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param fileName 
     * @param contentType 
     * @param requestBody 
     * @returns UploadFileResponse Success
     * @throws ApiError
     */
    public static postUploadFileReturnRequest(
fileName: string,
contentType: string,
requestBody?: string,
): CancelablePromise<UploadFileResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/ReturnRequest/UploadFileReturnRequest`,
            query: {
                'fileName': fileName,
                'contentType': contentType,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}