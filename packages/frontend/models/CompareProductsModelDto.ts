/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductOverviewModelDto } from './ProductOverviewModelDto';

export type CompareProductsModelDto = {
    products?: Array<ProductOverviewModelDto> | null;
    include_short_description_in_compare_products?: boolean;
    include_full_description_in_compare_products?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}