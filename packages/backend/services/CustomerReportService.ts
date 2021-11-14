/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BestCustomerReportLineBestCustomerReportLineDtoPagedListDto } from '../models/BestCustomerReportLineBestCustomerReportLineDtoPagedListDto';
import type { OrderByEnum } from '../models/OrderByEnum';
import type { OrderStatus } from '../models/OrderStatus';
import type { PaymentStatus } from '../models/PaymentStatus';
import type { ShippingStatus } from '../models/ShippingStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CustomerReportService {

    /**
     * Gets a report of customers registered in the last days
     * @param days Customers registered in the last days
     * @returns number Success
     * @throws ApiError
     */
    public static getGetRegisteredCustomersReport(
days: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerReport/GetRegisteredCustomersReport`,
            query: {
                'days': days,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get best customers
     * @param orderBy 1 - order by order total, 2 - order by number of orders
     * @param createdFromUtc Order created date from (UTC); null to load all records
     * @param createdToUtc Order created date to (UTC); null to load all records
     * @param orderStatus Order status; null to load all records
     * @param paymentStatus Order payment status; null to load all records
     * @param shippingStatus Order shipment status; null to load all records
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns BestCustomerReportLineBestCustomerReportLineDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetBestCustomersReport(
orderBy: OrderByEnum,
createdFromUtc?: string,
createdToUtc?: string,
orderStatus?: OrderStatus,
paymentStatus?: PaymentStatus,
shippingStatus?: ShippingStatus,
pageIndex?: number,
pageSize: number = 214748364,
): CancelablePromise<BestCustomerReportLineBestCustomerReportLineDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/CustomerReport/GetBestCustomersReport`,
            query: {
                'createdFromUtc': createdFromUtc,
                'createdToUtc': createdToUtc,
                'orderStatus': orderStatus,
                'paymentStatus': paymentStatus,
                'shippingStatus': shippingStatus,
                'orderBy': orderBy,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}