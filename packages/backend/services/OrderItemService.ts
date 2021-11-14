/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItemDto } from '../models/OrderItemDto';
import type { ProductDto } from '../models/ProductDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderItemService {

    /**
     * Gets a order item
     * @param id Order item identifier
     * @returns OrderItemDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<OrderItemDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a product of specify order item
     * @param id Order item identifier
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductByOrderItemId(
id: number,
): CancelablePromise<ProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetProductByOrderItemId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a list items of order
     * @param orderId Order identifier
     * @param isNotReturnable Value indicating whether this product is returnable; pass null to ignore
     * @param isShipEnabled Value indicating whether the entity is ship enabled; pass null to ignore
     * @param vendorId Vendor identifier; pass 0 to ignore
     * @returns OrderItemDto Success
     * @throws ApiError
     */
    public static getGetOrderItems(
orderId: number,
isNotReturnable?: boolean,
isShipEnabled?: boolean,
vendorId?: number,
): CancelablePromise<Array<OrderItemDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetOrderItems/${orderId}`,
            query: {
                'isNotReturnable': isNotReturnable,
                'isShipEnabled': isShipEnabled,
                'vendorId': vendorId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an order item by GUID
     * @param guid The order GUID
     * @returns OrderItemDto Success
     * @throws ApiError
     */
    public static getGetByGuid(
guid: string,
): CancelablePromise<OrderItemDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetByGuid`,
            query: {
                'guid': guid,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all downloadable order items
     * @param customerId Customer identifier
     * @returns OrderItemDto Success
     * @throws ApiError
     */
    public static getGetOrderItemsByCustomer(
customerId: number,
): CancelablePromise<Array<OrderItemDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetOrderItemsByCustomer/${customerId}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a order item
     * @param id Order item identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/OrderItem/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a total number of items in all shipments
     * @param orderItemId The order item identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetTotalNumberOfItemsInAllShipments(
orderItemId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetTotalNumberOfItemsInAllShipments/${orderItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a total number of already items which can be added to new shipments
     * @param orderItemId The order item identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetTotalNumberOfItemsCanBeAddedToShipment(
orderItemId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/GetTotalNumberOfItemsCanBeAddedToShipment/${orderItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether download is allowed
     * @param orderItemId The order item identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsDownloadAllowed(
orderItemId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/IsDownloadAllowed/${orderItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether license download is allowed
     * @param orderItemId The order item identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsLicenseDownloadAllowed(
orderItemId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderItem/IsLicenseDownloadAllowed/${orderItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an order item
     * @param requestBody Order item Dto model
     * @returns OrderItemDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: OrderItemDto,
): CancelablePromise<OrderItemDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/OrderItem/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update an order item
     * @param requestBody Order item Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: OrderItemDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/OrderItem/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}