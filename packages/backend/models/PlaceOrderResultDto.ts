/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDto } from './OrderDto';

export type PlaceOrderResultDto = {
    /**
     * Gets a value indicating whether request has been completed successfully
     */
    success?: boolean;
    /**
     * Errors
     */
    errors?: Array<string> | null;
    placed_order?: OrderDto;
}