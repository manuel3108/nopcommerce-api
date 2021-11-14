/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BestsellersReportLineBestsellersReportLineDtoPagedListDto } from '../models/BestsellersReportLineBestsellersReportLineDtoPagedListDto';
import type { GroupByOptions } from '../models/GroupByOptions';
import type { OrderAverageReportLineResponse } from '../models/OrderAverageReportLineResponse';
import type { OrderByCountryReportLineResponse } from '../models/OrderByCountryReportLineResponse';
import type { OrderByEnum } from '../models/OrderByEnum';
import type { OrderStatus } from '../models/OrderStatus';
import type { PaymentStatus } from '../models/PaymentStatus';
import type { ProductProductDtoPagedListDto } from '../models/ProductProductDtoPagedListDto';
import type { SalesSummaryReportLineSalesSummaryReportLineDtoPagedListDto } from '../models/SalesSummaryReportLineSalesSummaryReportLineDtoPagedListDto';
import type { ShippingStatus } from '../models/ShippingStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderReportService {

    /**
     * Get "order by country" report
     * @param storeId Store identifier; 0 to load all records
     * @param os Order status
     * @param ps Payment status
     * @param ss Shipping status
     * @param startTimeUtc Start date
     * @param endTimeUtc End date
     * @returns OrderByCountryReportLineResponse Success
     * @throws ApiError
     */
    public static getGetCountryReport(
storeId?: number,
os?: OrderStatus,
ps?: PaymentStatus,
ss?: ShippingStatus,
startTimeUtc?: string,
endTimeUtc?: string,
): CancelablePromise<Array<OrderByCountryReportLineResponse>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/GetCountryReport`,
            query: {
                'storeId': storeId,
                'os': os,
                'ps': ps,
                'ss': ss,
                'startTimeUtc': startTimeUtc,
                'endTimeUtc': endTimeUtc,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get order average report
     * @param storeId Store identifier; pass 0 to ignore this parameter
     * @param vendorId Vendor identifier; pass 0 to ignore this parameter
     * @param productId Product identifier which was purchased in an order; 0 to load all orders
     * @param warehouseId Warehouse identifier; pass 0 to ignore this parameter
     * @param billingCountryId Billing country identifier; 0 to load all orders
     * @param orderId Order identifier; pass 0 to ignore this parameter
     * @param paymentMethodSystemName Payment method system name; null to load all records
     * @param osIds Order status identifiers
     * @param psIds Payment status identifiers
     * @param ssIds Shipping status identifiers
     * @param startTimeUtc Start date
     * @param endTimeUtc End date
     * @param billingPhone Billing phone. Leave empty to load all records.
     * @param billingEmail Billing email. Leave empty to load all records.
     * @param billingLastName Billing last name. Leave empty to load all records.
     * @param orderNotes Search in order notes. Leave empty to load all records.
     * @returns OrderAverageReportLineResponse Success
     * @throws ApiError
     */
    public static getGetOrderAverageReportLine(
storeId?: number,
vendorId?: number,
productId?: number,
warehouseId?: number,
billingCountryId?: number,
orderId?: number,
paymentMethodSystemName?: string,
osIds?: string,
psIds?: string,
ssIds?: string,
startTimeUtc?: string,
endTimeUtc?: string,
billingPhone?: string,
billingEmail?: string,
billingLastName: string = '',
orderNotes?: string,
): CancelablePromise<OrderAverageReportLineResponse> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/GetOrderAverageReportLine`,
            query: {
                'storeId': storeId,
                'vendorId': vendorId,
                'productId': productId,
                'warehouseId': warehouseId,
                'billingCountryId': billingCountryId,
                'orderId': orderId,
                'paymentMethodSystemName': paymentMethodSystemName,
                'osIds': osIds,
                'psIds': psIds,
                'ssIds': ssIds,
                'startTimeUtc': startTimeUtc,
                'endTimeUtc': endTimeUtc,
                'billingPhone': billingPhone,
                'billingEmail': billingEmail,
                'billingLastName': billingLastName,
                'orderNotes': orderNotes,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get sales summary report
     * @param categoryId Category identifier; 0 to load all records
     * @param productId Product identifier; 0 to load all records
     * @param manufacturerId Manufacturer identifier; 0 to load all records
     * @param storeId Store identifier (orders placed in a specific store); 0 to load all records
     * @param vendorId Vendor identifier; 0 to load all records
     * @param createdFromUtc Order created date from (UTC); null to load all records
     * @param createdToUtc Order created date to (UTC); null to load all records
     * @param os Order status; null to load all records
     * @param ps Order payment status; null to load all records
     * @param billingCountryId Billing country identifier; 0 to load all records
     * @param groupBy 0 - group by day, 1 - group by week, 2 - group by total month
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns SalesSummaryReportLineSalesSummaryReportLineDtoPagedListDto Success
     * @throws ApiError
     */
    public static getSalesSummaryReport(
categoryId?: number,
productId?: number,
manufacturerId?: number,
storeId?: number,
vendorId?: number,
createdFromUtc?: string,
createdToUtc?: string,
os?: OrderStatus,
ps?: PaymentStatus,
billingCountryId?: number,
groupBy?: GroupByOptions,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<SalesSummaryReportLineSalesSummaryReportLineDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/SalesSummaryReport`,
            query: {
                'categoryId': categoryId,
                'productId': productId,
                'manufacturerId': manufacturerId,
                'storeId': storeId,
                'vendorId': vendorId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'os': os,
                'ps': ps,
                'billingCountryId': billingCountryId,
                'groupBy': groupBy,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get best sellers report
     * @param categoryId Category identifier; 0 to load all records
     * @param manufacturerId Manufacturer identifier; 0 to load all records
     * @param storeId Store identifier (orders placed in a specific store); 0 to load all records
     * @param vendorId Vendor identifier; 0 to load all records
     * @param createdFromUtc Order created date from (UTC); null to load all records
     * @param createdToUtc Order created date to (UTC); null to load all records
     * @param os Order status; null to load all records
     * @param ps Order payment status; null to load all records
     * @param ss Shipping status; null to load all records
     * @param billingCountryId Billing country identifier; 0 to load all records
     * @param orderBy 1 - order by quantity, 2 - order by total amount
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns BestsellersReportLineBestsellersReportLineDtoPagedListDto Success
     * @throws ApiError
     */
    public static getBestSellersReport(
categoryId?: number,
manufacturerId?: number,
storeId?: number,
vendorId?: number,
createdFromUtc?: string,
createdToUtc?: string,
os?: OrderStatus,
ps?: PaymentStatus,
ss?: ShippingStatus,
billingCountryId?: number,
orderBy?: OrderByEnum,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<BestsellersReportLineBestsellersReportLineDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/BestSellersReport`,
            query: {
                'categoryId': categoryId,
                'manufacturerId': manufacturerId,
                'storeId': storeId,
                'vendorId': vendorId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'os': os,
                'ps': ps,
                'ss': ss,
                'billingCountryId': billingCountryId,
                'orderBy': orderBy,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get best sellers total amount
     * @param categoryId Category identifier; 0 to load all records
     * @param manufacturerId Manufacturer identifier; 0 to load all records
     * @param storeId Store identifier (orders placed in a specific store); 0 to load all records
     * @param vendorId Vendor identifier; 0 to load all records
     * @param createdFromUtc Order created date from (UTC); null to load all records
     * @param createdToUtc Order created date to (UTC); null to load all records
     * @param os Order status; null to load all records
     * @param ps Order payment status; null to load all records
     * @param ss Shipping status; null to load all records
     * @param billingCountryId Billing country identifier; 0 to load all records
     * @param showHidden A value indicating whether to show hidden records
     * @returns number Success
     * @throws ApiError
     */
    public static getBestSellersReportTotalAmount(
categoryId?: number,
manufacturerId?: number,
storeId?: number,
vendorId?: number,
createdFromUtc?: string,
createdToUtc?: string,
os?: OrderStatus,
ps?: PaymentStatus,
ss?: ShippingStatus,
billingCountryId?: number,
showHidden: boolean = false,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/BestSellersReportTotalAmount`,
            query: {
                'categoryId': categoryId,
                'manufacturerId': manufacturerId,
                'storeId': storeId,
                'vendorId': vendorId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'os': os,
                'ps': ps,
                'ss': ss,
                'billingCountryId': billingCountryId,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get best sellers total amount
     * @param storeId Store identifier
     * @param productId Product identifier
     * @param recordsToReturn Records to return
     * @param visibleIndividuallyOnly A values indicating whether to load only products marked as "visible individually"; "false" to load all records; "true" to load "visible individually" only
     * @param showHidden A value indicating whether to show hidden records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAlsoPurchasedProductsIds(
storeId: number,
productId: number,
recordsToReturn: number = 5,
visibleIndividuallyOnly: boolean = true,
showHidden: boolean = false,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/GetAlsoPurchasedProductsIds/${storeId}/${productId}`,
            query: {
                'recordsToReturn': recordsToReturn,
                'visibleIndividuallyOnly': visibleIndividuallyOnly,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a list of products that were never sold
     * @param vendorId Vendor identifier (filter products by a specific vendor); 0 to load all records
     * @param storeId Store identifier (filter products by a specific store); 0 to load all records
     * @param categoryId Category identifier; 0 to load all records
     * @param manufacturerId Manufacturer identifier; 0 to load all records
     * @param createdFromUtc Order created date from (UTC); null to load all records
     * @param createdToUtc Order created date to (UTC); null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getProductsNeverSold(
vendorId?: number,
storeId?: number,
categoryId?: number,
manufacturerId?: number,
createdFromUtc?: string,
createdToUtc?: string,
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/ProductsNeverSold`,
            query: {
                'vendorId': vendorId,
                'storeId': storeId,
                'categoryId': categoryId,
                'manufacturerId': manufacturerId,
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get profit report
     * @param storeId Store identifier; pass 0 to ignore this parameter
     * @param vendorId Vendor identifier; pass 0 to ignore this parameter
     * @param productId Product identifier which was purchased in an order; 0 to load all orders
     * @param warehouseId Warehouse identifier; pass 0 to ignore this parameter
     * @param billingCountryId Billing country identifier; 0 to load all orders
     * @param orderId Order identifier; pass 0 to ignore this parameter
     * @param paymentMethodSystemName Payment method system name; null to load all records
     * @param osIds Order status identifiers; null to load all records
     * @param psIds Payment status identifiers; null to load all records
     * @param ssIds Shipping status identifiers; null to load all records
     * @param startTimeUtc Start date
     * @param endTimeUtc End date
     * @param billingPhone Billing phone. Leave empty to load all records.
     * @param billingEmail Billing email. Leave empty to load all records.
     * @param billingLastName Billing last name. Leave empty to load all records.
     * @param orderNotes Search in order notes. Leave empty to load all records.
     * @returns number Success
     * @throws ApiError
     */
    public static getProfitReport(
storeId?: number,
vendorId?: number,
productId?: number,
warehouseId?: number,
billingCountryId?: number,
orderId?: number,
paymentMethodSystemName?: string,
osIds?: string,
psIds?: string,
ssIds?: string,
startTimeUtc?: string,
endTimeUtc?: string,
billingPhone?: string,
billingEmail?: string,
billingLastName: string = '',
orderNotes?: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderReport/ProfitReport`,
            query: {
                'storeId': storeId,
                'vendorId': vendorId,
                'productId': productId,
                'warehouseId': warehouseId,
                'billingCountryId': billingCountryId,
                'orderId': orderId,
                'paymentMethodSystemName': paymentMethodSystemName,
                'osIds': osIds,
                'psIds': psIds,
                'ssIds': ssIds,
                'startTimeUtc': startTimeUtc,
                'endTimeUtc': endTimeUtc,
                'billingPhone': billingPhone,
                'billingEmail': billingEmail,
                'billingLastName': billingLastName,
                'orderNotes': orderNotes,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}