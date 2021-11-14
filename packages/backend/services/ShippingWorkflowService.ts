/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetPickupPointsResponseDto } from '../models/GetPickupPointsResponseDto';
import type { GetShippingOptionResponseDto } from '../models/GetShippingOptionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ShippingWorkflowService {

    /**
     * Gets shopping cart item weight (of one item)
     * @param cartItemId Cart item identifier
     * @param ignoreFreeShippedItems Whether to ignore the weight of the products marked as "Free shipping"
     * @returns number Success
     * @throws ApiError
     */
    public static getGetShoppingCartItemWeight(
cartItemId: number,
ignoreFreeShippedItems: boolean = false,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/GetShoppingCartItemWeight/${cartItemId}`,
            query: {
                'ignoreFreeShippedItems': ignoreFreeShippedItems,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets product item weight (of one item)
     * @param productId Product
     * @param ignoreFreeShippedItems Whether to ignore the weight of the products marked as "Free shipping"
     * @param requestBody Selected product attributes in XML
     * @returns number Success
     * @throws ApiError
     */
    public static postGetShoppingCartItemWeight(
productId: number,
ignoreFreeShippedItems: boolean = false,
requestBody?: string,
): CancelablePromise<number> {
        return __request({
            method: 'POST',
            path: `/api-backend/ShippingWorkflow/GetShoppingCartItemWeight/${productId}`,
            query: {
                'ignoreFreeShippedItems': ignoreFreeShippedItems,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets available shipping options
     * @param shippingAddressId Shipping address
     * @param cartIds 
     * @param shoppingCartIds Shopping cart identifiers (separator - ;)
     * @param customerId Load records allowed only to a specified customer; pass null to ignore ACL permissions
     * @param allowedShippingRateComputationMethodSystemName Filter by shipping rate computation method identifier; null to load shipping options of all shipping rate computation methods
     * @param storeId Load records allowed only in a specified store; pass 0 to load all records
     * @returns GetShippingOptionResponseDto Success
     * @throws ApiError
     */
    public static getGetShippingOptions(
shippingAddressId: number,
cartIds: string,
shoppingCartIds?: string,
customerId?: number,
allowedShippingRateComputationMethodSystemName: string = '',
storeId?: number,
): CancelablePromise<GetShippingOptionResponseDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/GetShippingOptions/${cartIds}/${shippingAddressId}`,
            query: {
                'shoppingCartIds': shoppingCartIds,
                'customerId': customerId,
                'allowedShippingRateComputationMethodSystemName': allowedShippingRateComputationMethodSystemName,
                'storeId': storeId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets available pickup points
     * @param addressId Address identifier
     * @param customerId Load records allowed only to a specified customer; pass null to ignore ACL permissions
     * @param providerSystemName Filter by provider identifier; null to load pickup points of all providers
     * @param storeId Load records allowed only in a specified store; pass 0 to load all records
     * @returns GetPickupPointsResponseDto Success
     * @throws ApiError
     */
    public static getGetPickupPoints(
addressId: number,
customerId?: number,
providerSystemName?: string,
storeId?: number,
): CancelablePromise<GetPickupPointsResponseDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/GetPickupPoints/${addressId}`,
            query: {
                'customerId': customerId,
                'providerSystemName': providerSystemName,
                'storeId': storeId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Whether the shopping cart item is ship enabled
     * @param cartItemId Cart item identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsShipEnabled(
cartItemId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/IsShipEnabled/${cartItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Whether the shopping cart item is free shipping
     * @param cartItemId Cart item identifier
     * @returns boolean Success
     * @throws ApiError
     */
    public static getIsFreeShipping(
cartItemId: number,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/IsFreeShipping/${cartItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get the additional shipping charge
     * @param cartItemId Cart item identifier
     * @returns number Success
     * @throws ApiError
     */
    public static getGetAdditionalShippingCharge(
cartItemId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/ShippingWorkflow/GetAdditionalShippingCharge/${cartItemId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}