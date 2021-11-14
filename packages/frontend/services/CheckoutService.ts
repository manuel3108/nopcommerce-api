/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckoutBillingAddressModelDto } from '../models/CheckoutBillingAddressModelDto';
import type { CheckoutBillingAddressModelDtoBaseModelDtoRequest } from '../models/CheckoutBillingAddressModelDtoBaseModelDtoRequest';
import type { CheckoutBillingAddressModelDtoEditAddressResponse } from '../models/CheckoutBillingAddressModelDtoEditAddressResponse';
import type { CheckoutBillingAddressModelDtoNextStepResponse } from '../models/CheckoutBillingAddressModelDtoNextStepResponse';
import type { CheckoutCompletedModelDto } from '../models/CheckoutCompletedModelDto';
import type { CheckoutConfirmModelDto } from '../models/CheckoutConfirmModelDto';
import type { CheckoutConfirmModelDtoNextStepResponse } from '../models/CheckoutConfirmModelDtoNextStepResponse';
import type { CheckoutPaymentMethodModelDto } from '../models/CheckoutPaymentMethodModelDto';
import type { CheckoutRedirectResponse } from '../models/CheckoutRedirectResponse';
import type { CheckoutShippingAddressModelDtoBaseModelDtoRequest } from '../models/CheckoutShippingAddressModelDtoBaseModelDtoRequest';
import type { CheckoutShippingAddressModelDtoNextStepResponse } from '../models/CheckoutShippingAddressModelDtoNextStepResponse';
import type { CompletedResponse } from '../models/CompletedResponse';
import type { ConfirmOrderResponse } from '../models/ConfirmOrderResponse';
import type { GetAddressByIdResponse } from '../models/GetAddressByIdResponse';
import type { NewBillingAddressResponse } from '../models/NewBillingAddressResponse';
import type { NewShippingAddressResponse } from '../models/NewShippingAddressResponse';
import type { OnePageCheckoutModelDto } from '../models/OnePageCheckoutModelDto';
import type { PaymentInfoResponse } from '../models/PaymentInfoResponse';
import type { ShippingAddressResponse } from '../models/ShippingAddressResponse';
import type { ShippingMethodResponse } from '../models/ShippingMethodResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class CheckoutService {

    /**
     * Index
     * @returns CheckoutBillingAddressModelDto Success
     * @throws ApiError
     */
    public static getIndex(): CancelablePromise<CheckoutBillingAddressModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/Index`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare checkout completed model
     * @param orderId 
     * @returns CompletedResponse Success
     * @throws ApiError
     */
    public static getCompleted(
orderId?: number,
): CancelablePromise<CompletedResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/Completed`,
            query: {
                'orderId': orderId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get specified Address by addresId
     * @param addressId Address identifier
     * @returns GetAddressByIdResponse Success
     * @throws ApiError
     */
    public static getGetAddressById(
addressId: number,
): CancelablePromise<GetAddressByIdResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/GetAddressById/${addressId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Save edited address
     * @param opc 
     * @param requestBody 
     * @returns CheckoutBillingAddressModelDtoEditAddressResponse Success
     * @throws ApiError
     */
    public static postSaveEditAddress(
opc: boolean,
requestBody?: CheckoutBillingAddressModelDto,
): CancelablePromise<CheckoutBillingAddressModelDtoEditAddressResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/SaveEditAddress`,
            query: {
                'opc': opc,
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
     * Delete edited address
     * @param addressId Address identifier
     * @param opc Is one page checkout
     * @returns CheckoutBillingAddressModelDtoEditAddressResponse Success
     * @throws ApiError
     */
    public static deleteDeleteEditAddress(
addressId: number,
opc: boolean = false,
): CancelablePromise<CheckoutBillingAddressModelDtoEditAddressResponse> {
        return __request({
            method: 'DELETE',
            path: `/api-frontend/Checkout/DeleteEditAddress/${addressId}`,
            query: {
                'opc': opc,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Prepare billing address model
     * @param requestBody 
     * @returns CheckoutBillingAddressModelDto Success
     * @throws ApiError
     */
    public static postBillingAddress(
requestBody?: Record<string, string>,
): CancelablePromise<CheckoutBillingAddressModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/BillingAddress`,
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
     * Select billing address
     * @param addressId Address identifier
     * @param shipToSameAddress A value indicating "Ship to the same address" option is enabled
     * @returns CheckoutRedirectResponse Success
     * @throws ApiError
     */
    public static getSelectBillingAddress(
addressId: number,
shipToSameAddress: boolean = false,
): CancelablePromise<CheckoutRedirectResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/SelectBillingAddress/${addressId}`,
            query: {
                'shipToSameAddress': shipToSameAddress,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * New billing address
     * @param requestBody 
     * @returns NewBillingAddressResponse Success
     * @throws ApiError
     */
    public static postNewBillingAddress(
requestBody?: CheckoutBillingAddressModelDtoBaseModelDtoRequest,
): CancelablePromise<NewBillingAddressResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/NewBillingAddress`,
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
     * Prepare shipping address model
     * @returns ShippingAddressResponse Success
     * @throws ApiError
     */
    public static getShippingAddress(): CancelablePromise<ShippingAddressResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/ShippingAddress`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Select shipping address
     * @param addressId Address identifier
     * @returns CheckoutRedirectResponse Success
     * @throws ApiError
     */
    public static getSelectShippingAddress(
addressId: number,
): CancelablePromise<CheckoutRedirectResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/SelectShippingAddress/${addressId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * New shipping address
     * @param requestBody 
     * @returns NewShippingAddressResponse Success
     * @throws ApiError
     */
    public static postNewShippingAddress(
requestBody?: CheckoutShippingAddressModelDtoBaseModelDtoRequest,
): CancelablePromise<NewShippingAddressResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/NewShippingAddress`,
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
     * Prepare shipping method model
     * @returns ShippingMethodResponse Success
     * @throws ApiError
     */
    public static getShippingMethod(): CancelablePromise<ShippingMethodResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/ShippingMethod`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Select shipping method
     * @param shippingOption 
     * @param requestBody 
     * @returns CheckoutRedirectResponse Success
     * @throws ApiError
     */
    public static postSelectShippingMethod(
shippingOption: string,
requestBody?: Record<string, string>,
): CancelablePromise<CheckoutRedirectResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/SelectShippingMethod`,
            query: {
                'shippingOption': shippingOption,
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
     * Prepare payment method model
     * @returns CheckoutPaymentMethodModelDto Success
     * @throws ApiError
     */
    public static getPaymentMethod(): CancelablePromise<CheckoutPaymentMethodModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/PaymentMethod`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Select payment method
     * @param paymentMethod 
     * @param requestBody 
     * @returns CheckoutRedirectResponse Success
     * @throws ApiError
     */
    public static postSelectPaymentMethod(
paymentMethod: string,
requestBody?: CheckoutPaymentMethodModelDto,
): CancelablePromise<CheckoutRedirectResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/SelectPaymentMethod`,
            query: {
                'paymentMethod': paymentMethod,
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
     * Prepare payment info model
     * @returns PaymentInfoResponse Success
     * @throws ApiError
     */
    public static getPaymentInfo(): CancelablePromise<PaymentInfoResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/PaymentInfo`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Enter payment Info
     * @param requestBody 
     * @returns CheckoutConfirmModelDto Success
     * @throws ApiError
     */
    public static postEnterPaymentInfo(
requestBody?: Record<string, string>,
): CancelablePromise<CheckoutConfirmModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/EnterPaymentInfo`,
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
     * Prepare confirm order model
     * @returns CheckoutConfirmModelDto Success
     * @throws ApiError
     */
    public static postConfirm(): CancelablePromise<CheckoutConfirmModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/Confirm`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Confirm order
     * @returns ConfirmOrderResponse Success
     * @throws ApiError
     */
    public static getConfirmOrder(): CancelablePromise<ConfirmOrderResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/ConfirmOrder`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Prepare one page checkout model
     * @returns OnePageCheckoutModelDto Success
     * @throws ApiError
     */
    public static getOnePageCheckout(): CancelablePromise<OnePageCheckoutModelDto> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/OnePageCheckout`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Save billing (OPC)
     * @param requestBody 
     * @returns CheckoutBillingAddressModelDtoNextStepResponse Success
     * @throws ApiError
     */
    public static postOpcSaveBilling(
requestBody?: CheckoutBillingAddressModelDtoBaseModelDtoRequest,
): CancelablePromise<CheckoutBillingAddressModelDtoNextStepResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcSaveBilling`,
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
     * Save shipping (OPC)
     * @param requestBody 
     * @returns CheckoutShippingAddressModelDtoNextStepResponse Success
     * @throws ApiError
     */
    public static postOpcSaveShipping(
requestBody?: CheckoutShippingAddressModelDtoBaseModelDtoRequest,
): CancelablePromise<CheckoutShippingAddressModelDtoNextStepResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcSaveShipping`,
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
     * Save shipping method (OPC)
     * @param shippingOption 
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static postOpcSaveShippingMethod(
shippingOption: string,
requestBody?: Record<string, string>,
): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcSaveShippingMethod`,
            query: {
                'shippingOption': shippingOption,
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
     * Save payment method (OPC)
     * @param paymentMethod 
     * @param requestBody 
     * @returns CheckoutConfirmModelDtoNextStepResponse Success
     * @throws ApiError
     */
    public static postOpcSavePaymentMethod(
paymentMethod: string,
requestBody?: CheckoutPaymentMethodModelDto,
): CancelablePromise<CheckoutConfirmModelDtoNextStepResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcSavePaymentMethod`,
            query: {
                'paymentMethod': paymentMethod,
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
     * Save payment info (OPC)
     * @param requestBody 
     * @returns CheckoutConfirmModelDtoNextStepResponse Success
     * @throws ApiError
     */
    public static postOpcSavePaymentInfo(
requestBody?: Record<string, string>,
): CancelablePromise<CheckoutConfirmModelDtoNextStepResponse> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcSavePaymentInfo`,
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
     * Confirm order (OPC)
     * @returns CheckoutConfirmModelDtoNextStepResponse Success
     * @throws ApiError
     */
    public static getOpcConfirmOrder(): CancelablePromise<CheckoutConfirmModelDtoNextStepResponse> {
        return __request({
            method: 'GET',
            path: `/api-frontend/Checkout/OpcConfirmOrder`,
            errors: {
                302: `Redirect`,
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Complete redirection payment (OPC)
     * @returns CheckoutCompletedModelDto Success
     * @throws ApiError
     */
    public static postOpcCompleteRedirectionPayment(): CancelablePromise<CheckoutCompletedModelDto> {
        return __request({
            method: 'POST',
            path: `/api-frontend/Checkout/OpcCompleteRedirectionPayment`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}