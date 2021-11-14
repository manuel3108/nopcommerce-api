/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderNoteDto } from '../models/OrderNoteDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderNoteService {

    /**
     * Gets a order note
     * @param id Order note identifier
     * @returns OrderNoteDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<OrderNoteDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderNote/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a list notes of order
     * @param orderId Order identifier
     * @param displayToCustomer Value indicating whether a customer can see a note; pass null to ignore
     * @returns OrderNoteDto Success
     * @throws ApiError
     */
    public static getGetOrderNotesByOrderId(
orderId: number,
displayToCustomer?: boolean,
): CancelablePromise<Array<OrderNoteDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderNote/GetOrderNotesByOrderId/${orderId}`,
            query: {
                'displayToCustomer': displayToCustomer,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a order note
     * @param id Order note identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/OrderNote/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the order note text
     * @param id Order note identifier
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatOrderNoteText(
id: number,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderNote/FormatOrderNoteText/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an order note
     * @param requestBody Order note Dto model
     * @returns OrderNoteDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: OrderNoteDto,
): CancelablePromise<OrderNoteDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/OrderNote/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}