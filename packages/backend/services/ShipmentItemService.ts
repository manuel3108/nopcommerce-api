/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentDto } from '../models/ShipmentDto';
import type { ShipmentItemDto } from '../models/ShipmentItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShipmentItemService {

    /**
     * Gets a shipment items of shipment
     * @param id Shipment identifier
     * @returns ShipmentItemDto Success
     * @throws ApiError
     */
    public static getGetByShipmentId(
id: number,
): CancelablePromise<Array<ShipmentItemDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShipmentItem/GetByShipmentId/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a shipment item
     * @param requestBody Shipment item Dto model
     * @returns ShipmentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ShipmentItemDto,
): CancelablePromise<ShipmentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShipmentItem/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get quantity in shipments. For example, get planned quantity to be shipped
     * @param productId Product identifier
     * @param warehouseId Warehouse identifier
     * @param ignoreShipped Ignore already shipped shipments
     * @param ignoreDelivered Ignore already delivered shipments
     * @returns number Success
     * @throws ApiError
     */
    public static getGetQuantityInShipments(
productId: number,
warehouseId: number,
ignoreShipped: boolean,
ignoreDelivered: boolean,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShipmentItem/GetQuantityInShipments/${productId}/${warehouseId}`,
            query: {
                'ignoreShipped': ignoreShipped,
                'ignoreDelivered': ignoreDelivered,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}