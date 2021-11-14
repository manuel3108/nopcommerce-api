/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProductsModelDto } from './CatalogProductsModelDto';
import type { SelectListItemDto } from './SelectListItemDto';

export type SearchModelDto = {
    /**
     * Query string
     */
    'q'?: string | null;
    /**
     * Category ID
     */
    cid?: number;
    isc?: boolean;
    /**
     * Manufacturer ID
     */
    mid?: number;
    /**
     * Vendor ID
     */
    vid?: number;
    /**
     * A value indicating whether to search in descriptions
     */
    sid?: boolean;
    /**
     * A value indicating whether "advanced search" is enabled
     */
    advs?: boolean;
    /**
     * A value indicating whether "allow search by vendor" is enabled
     */
    asv?: boolean;
    catalog_products_model?: CatalogProductsModelDto;
    available_categories?: Array<SelectListItemDto> | null;
    available_manufacturers?: Array<SelectListItemDto> | null;
    available_vendors?: Array<SelectListItemDto> | null;
    custom_properties?: Record<string, any> | null;
}