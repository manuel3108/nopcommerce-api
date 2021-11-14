/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShippingOptionDto } from './ShippingOptionDto';

export type GetShippingOptionResponseDto = {
    /**
     * Gets or sets a list of shipping options
     */
    shipping_options?: Array<ShippingOptionDto> | null;
    /**
     * Gets or sets a value indicating whether shipping is done from multiple locations (warehouses)
     */
    shipping_from_multiple_locations?: boolean;
    /**
     * Gets or sets errors
     */
    errors?: Array<string> | null;
    /**
     * Gets a value indicating whether request has been completed successfully
     */
    readonly success?: boolean;
}