/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountDto } from './DiscountDto';
import type { OrderDto } from './OrderDto';
import type { OrderItemDto } from './OrderItemDto';
import type { PickupPointDto } from './PickupPointDto';

export type UpdateOrderParametersDto = {
    updated_order?: OrderDto;
    updated_order_item?: OrderItemDto;
    /**
     * The price of item with tax
     */
    price_incl_tax?: number;
    /**
     * The price of item without tax
     */
    price_excl_tax?: number;
    /**
     * The quantity
     */
    quantity?: number;
    /**
     * The amount of discount with tax
     */
    discount_amount_incl_tax?: number;
    /**
     * The amount of discount without tax
     */
    discount_amount_excl_tax?: number;
    /**
     * Subtotal of item with tax
     */
    sub_total_incl_tax?: number;
    /**
     * Subtotal of item without tax
     */
    sub_total_excl_tax?: number;
    /**
     * Warnings
     */
    readonly warnings?: Array<string> | null;
    /**
     * Applied discounts
     */
    applied_discounts?: Array<DiscountDto> | null;
    pickup_point?: PickupPointDto;
}