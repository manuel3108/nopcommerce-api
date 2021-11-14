/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelectListItemDto } from './SelectListItemDto';

/**
 * Represents a manufacturer filter model
 */
export type ManufacturerFilterModelDto = {
    /**
     * Gets or sets a value indicating whether filtering is enabled
     */
    enabled?: boolean;
    /**
     * Gets or sets the filtrable manufacturers
     */
    manufacturers?: Array<SelectListItemDto> | null;
    custom_properties?: Record<string, any> | null;
}