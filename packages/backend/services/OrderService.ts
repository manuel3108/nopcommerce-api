/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderDto } from '../models/OrderDto';
import type { OrderOrderDtoPagedListDto } from '../models/OrderOrderDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * Gets a order
     * @param id Order identifier
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<OrderDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a order by custome order number
     * @param customOrderNumber The custom order number
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static getGetByCustomOrderNumber(
customOrderNumber: string,
): CancelablePromise<OrderDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/GetByCustomOrderNumber`,
            query: {
                'customOrderNumber': customOrderNumber,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a order by order item identifier
     * @param orderItemId The order item identifier
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static getGetByOrderItem(
orderItemId: number,
): CancelablePromise<OrderDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/GetByOrderItem/${orderItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get orders by identifiers
     * @param ids Array of order identifiers (separator - ;)
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static getGetByIds(
ids: string,
): CancelablePromise<Array<OrderDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/GetByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets an order by GUID
     * @param guid The order GUID
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static getGetByGuid(
guid: string,
): CancelablePromise<OrderDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/GetByGuid`,
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
     * Delete a order
     * @param id Order identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Order/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create an order
     * @param requestBody Order Dto model
     * @returns OrderDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: OrderDto,
): CancelablePromise<OrderDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Order/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update an order
     * @param requestBody Order Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: OrderDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Order/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Search orders
     * @param storeId Store identifier; 0 to load all orders
     * @param vendorId Vendor identifier; null to load all orders
     * @param customerId Customer identifier; 0 to load all orders
     * @param productId Product identifier which was purchased in an order; 0 to load all orders
     * @param affiliateId Affiliate identifier; 0 to load all orders
     * @param warehouseId Warehouse identifier, only orders with products from a specified warehouse will be loaded; 0 to load all orders
     * @param billingCountryId Billing country identifier; 0 to load all orders
     * @param paymentMethodSystemName Payment method system name; null to load all records
     * @param createdFromUtc Created date from (UTC); null to load all records
     * @param createdToUtc Created date to (UTC); null to load all records
     * @param osIds Order status identifiers; null to load all orders
     * @param psIds Payment status identifiers; null to load all orders
     * @param ssIds Shipping status identifiers; null to load all orders
     * @param billingPhone Billing phone. Leave empty to load all records.
     * @param billingEmail Billing email. Leave empty to load all records.
     * @param billingLastName Billing last name. Leave empty to load all records.
     * @param orderNotes Search in order notes. Leave empty to load all records.
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param getOnlyTotalCount A value in indicating whether you want to load only total number of records. Set to "true" if you don't want to load data from database
     * @returns OrderOrderDtoPagedListDto Success
     * @throws ApiError
     */
    public static getSearch(
storeId?: number,
vendorId?: number,
customerId?: number,
productId?: number,
affiliateId?: number,
warehouseId?: number,
billingCountryId?: number,
paymentMethodSystemName?: string,
createdFromUtc?: string,
createdToUtc?: string,
osIds?: string,
psIds?: string,
ssIds?: string,
billingPhone?: string,
billingEmail?: string,
billingLastName: string = '',
orderNotes?: string,
pageIndex?: number,
pageSize: number = 2147483647,
getOnlyTotalCount: boolean = false,
): CancelablePromise<OrderOrderDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/Search`,
            query: {
                'storeId': storeId,
                'vendorId': vendorId,
                'customerId': customerId,
                'productId': productId,
                'affiliateId': affiliateId,
                'warehouseId': warehouseId,
                'billingCountryId': billingCountryId,
                'paymentMethodSystemName': paymentMethodSystemName,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'osIds': osIds,
                'psIds': psIds,
                'ssIds': ssIds,
                'billingPhone': billingPhone,
                'billingEmail': billingEmail,
                'billingLastName': billingLastName,
                'orderNotes': orderNotes,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'getOnlyTotalCount': getOnlyTotalCount,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Parse tax rates
     * @param orderId Order identifier
     * @param taxRates Tax rates
     * @returns number Success
     * @throws ApiError
     */
    public static getParseTaxRates(
orderId: number,
taxRates: string,
): CancelablePromise<Record<string, number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/ParseTaxRates/${orderId}`,
            query: {
                'taxRates': taxRates,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether an order has items to be added to a shipment
     * @param orderId The order identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasItemsToAddToShipment(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/HasItemsToAddToShipment/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether an order has items to ship
     * @param orderId The order identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasItemsToShip(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/HasItemsToShip/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether an order has items to deliver
     * @param orderId The order identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasItemsToDeliver(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Order/HasItemsToDeliver/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}