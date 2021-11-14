/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlaceOrderResultDto } from '../models/PlaceOrderResultDto';
import type { ProcessPaymentRequestDto } from '../models/ProcessPaymentRequestDto';
import type { UpdateOrderParametersDto } from '../models/UpdateOrderParametersDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class OrderProcessingService {

    /**
     * Checks order status
     * @param orderId Order Id
     * @returns any Success
     * @throws ApiError
     */
    public static getCheckOrderStatus(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CheckOrderStatus/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Deletes an order
     * @param orderId The order
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteOrder(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/OrderProcessing/DeleteOrder/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether cancel is allowed
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanCancelOrder(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanCancelOrder/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Cancels order
     * @param orderId Order Id
     * @param notifyCustomer True to notify customer
     * @returns any Success
     * @throws ApiError
     */
    public static getCancelOrder(
orderId: number,
notifyCustomer: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CancelOrder/${orderId}`,
            query: {
                'notifyCustomer': notifyCustomer,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether order can be marked as authorized
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanMarkOrderAsAuthorized(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanMarkOrderAsAuthorized/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Marks order as authorized
     * @param orderId Order Id
     * @returns any Success
     * @throws ApiError
     */
    public static getMarkAsAuthorized(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/MarkAsAuthorized/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether capture from admin panel is allowed
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanCapture(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanCapture/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Capture an order (from admin panel)
     * @param orderId Order Id
     * @returns string Success
     * @throws ApiError
     */
    public static getCapture(
orderId: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/Capture/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether order can be marked as paid
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanMarkOrderAsPaid(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanMarkOrderAsPaid/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Marks order as paid
     * @param orderId Order Id
     * @returns any Success
     * @throws ApiError
     */
    public static getMarkOrderAsPaid(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/MarkOrderAsPaid/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether refund from admin panel is allowed
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanRefund(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanRefund/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Refunds an order (from admin panel)
     * @param orderId Order Id
     * @returns string Success
     * @throws ApiError
     */
    public static getRefund(
orderId: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/Refund/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether order can be marked as refunded
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanRefundOffline(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanRefundOffline/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Refunds an order (offline)
     * @param orderId Order Id
     * @returns any Success
     * @throws ApiError
     */
    public static getRefundOffline(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/RefundOffline/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether partial refund from admin panel is allowed
     * @param orderId Order Id
     * @param amountToRefund Amount to refund
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanPartiallyRefund(
orderId: number,
amountToRefund: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanPartiallyRefund/${orderId}`,
            query: {
                'amountToRefund': amountToRefund,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Partially refunds an order (from admin panel)
     * @param orderId Order Id
     * @param amountToRefund Amount to refund
     * @returns string Success
     * @throws ApiError
     */
    public static getPartiallyRefund(
orderId: number,
amountToRefund: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/PartiallyRefund/${orderId}`,
            query: {
                'amountToRefund': amountToRefund,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether order can be marked as partially refunded
     * @param orderId Order Id
     * @param amountToRefund Amount to refund
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanPartiallyRefundOffline(
orderId: number,
amountToRefund: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanPartiallyRefundOffline/${orderId}`,
            query: {
                'amountToRefund': amountToRefund,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Partially refunds an order (offline)
     * @param orderId Order Id
     * @param amountToRefund Amount to refund
     * @returns boolean Success
     * @throws ApiError
     */
    public static getPartiallyRefundOffline(
orderId: number,
amountToRefund: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/PartiallyRefundOffline/${orderId}`,
            query: {
                'amountToRefund': amountToRefund,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether void from admin panel is allowed
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanVoid(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanVoid/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Voids order (from admin panel)
     * @param orderId Order Id
     * @returns string Success
     * @throws ApiError
     */
    public static getVoid(
orderId: number,
): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/Void/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether order can be marked as voided
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getCanVoidOffline(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/CanVoidOffline/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Voids order (offline)
     * @param orderId Order Id
     * @returns any Success
     * @throws ApiError
     */
    public static getVoidOffline(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/VoidOffline/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Place order items in current user shopping cart.
     * @param orderId The order
     * @returns any Success
     * @throws ApiError
     */
    public static getReOrder(
orderId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/ReOrder/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Check whether return request is allowed
     * @param orderId Order Id
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsReturnRequestAllowed(
orderId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/IsReturnRequestAllowed/${orderId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Places an order
     * @param requestBody 
     * @returns PlaceOrderResultDto Success
     * @throws ApiError
     */
    public static postPlaceOrder(
requestBody?: ProcessPaymentRequestDto,
): CancelablePromise<PlaceOrderResultDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/OrderProcessing/PlaceOrder`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update order totals
     * @param requestBody Parameters for the updating order
     * @returns void 
     * @throws ApiError
     */
    public static postUpdateOrderTotals(
requestBody?: UpdateOrderParametersDto,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-backend/OrderProcessing/UpdateOrderTotals`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Send a shipment
     * @param shipmentId Shipment
     * @param notifyCustomer True to notify customer
     * @returns any Success
     * @throws ApiError
     */
    public static getShip(
shipmentId: number,
notifyCustomer: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/Ship/${shipmentId}`,
            query: {
                'notifyCustomer': notifyCustomer,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Marks a shipment as delivered
     * @param shipmentId Shipment
     * @param notifyCustomer True to notify customer
     * @returns any Success
     * @throws ApiError
     */
    public static getDeliver(
shipmentId: number,
notifyCustomer: boolean,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/Deliver/${shipmentId}`,
            query: {
                'notifyCustomer': notifyCustomer,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a value indicating whether payment workflow is required
     * @param ids Array of Shopping cart item identifiers (separator - ;)
     * @param useRewardPoints A value indicating reward points should be used; null to detect current choice of the customer
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsPaymentWorkflowRequired(
ids: string,
useRewardPoints?: boolean,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/IsPaymentWorkflowRequired/${ids}`,
            query: {
                'useRewardPoints': useRewardPoints,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Validate minimum order sub-total amount
     * @param ids Array of Shopping cart item identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getValidateMinOrderSubtotalAmount(
ids: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/ValidateMinOrderSubtotalAmount/${ids}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Validate minimum order total amount
     * @param ids Array of Shopping cart item identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getValidateMinOrderTotalAmount(
ids: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/OrderProcessing/ValidateMinOrderTotalAmount/${ids}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

}