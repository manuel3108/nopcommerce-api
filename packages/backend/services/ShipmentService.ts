/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentDto } from '../models/ShipmentDto';
import type { ShipmentShipmentDtoPagedListDto } from '../models/ShipmentShipmentDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShipmentService {

    /**
     * Gets all shipments
     * @param vendorId Vendor identifier; 0 to load all records
     * @param warehouseId Warehouse identifier, only shipments with products from a specified warehouse will be loaded; 0 to load all orders
     * @param shippingCountryId Shipping country identifier; 0 to load all records
     * @param shippingStateId Shipping state identifier; 0 to load all records
     * @param shippingCounty Shipping county; null to load all records
     * @param shippingCity Shipping city; null to load all records
     * @param trackingNumber Search by tracking number
     * @param loadNotShipped A value indicating whether we should load only not shipped shipments
     * @param loadNotDelivered A value indicating whether we should load only not delivered shipments
     * @param orderId Order identifier; 0 to load all records
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ShipmentShipmentDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
vendorId?: number,
warehouseId?: number,
shippingCountryId?: number,
shippingStateId?: number,
shippingCounty?: string,
shippingCity?: string,
trackingNumber?: string,
loadNotShipped: boolean = false,
loadNotDelivered: boolean = false,
orderId?: number,
createdFromUtc?: string,
createdToUtc?: string,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ShipmentShipmentDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Shipment/GetAll`,
            query: {
                'vendorId': vendorId,
                'warehouseId': warehouseId,
                'shippingCountryId': shippingCountryId,
                'shippingStateId': shippingStateId,
                'shippingCounty': shippingCounty,
                'shippingCity': shippingCity,
                'trackingNumber': trackingNumber,
                'loadNotShipped': loadNotShipped,
                'loadNotDelivered': loadNotDelivered,
                'orderId': orderId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a shipment
     * @param id Shipment identifier
     * @returns ShipmentDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ShipmentDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Shipment/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a shipment by identifiers
     * @param ids Array of shipment identifiers (separator - ;)
     * @returns ShipmentDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<ShipmentDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Shipment/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a list of order shipments
     * @param orderId Order identifier
     * @param shipped A value indicating whether to count only shipped or not shipped shipments; pass null to ignore
     * @param vendorId Vendor identifier; pass 0 to ignore
     * @returns ShipmentDto Success
     * @throws ApiError
     */
    public static getGetByOrderId(
orderId: number,
shipped?: boolean,
vendorId?: number,
): CancelablePromise<Array<ShipmentDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Shipment/GetByOrderId/${orderId}`,
            query: {
                'shipped': shipped,
                'vendorId': vendorId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Create a shipment
     * @param requestBody Shipment Dto model
     * @returns ShipmentDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ShipmentDto,
): CancelablePromise<ShipmentDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Shipment/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update a shipment
     * @param requestBody Shipment Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ShipmentDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Shipment/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a shipment
     * @param id Shipment identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Shipment/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}