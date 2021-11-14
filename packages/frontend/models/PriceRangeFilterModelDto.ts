/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceRangeModelDto } from './PriceRangeModelDto';

/**
 * Represents a products price range filter model
 */
export type PriceRangeFilterModelDto = {
    /**
     * Gets or sets a value indicating whether filtering is enabled
     */
    enabled?: boolean;
    selected_price_range?: PriceRangeModelDto;
    available_price_range?: PriceRangeModelDto;
    custom_properties?: Record<string, any> | null;
}