/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductManufacturerDto } from './ProductManufacturerDto';

export type ProductManufacturerProductManufacturerDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<ProductManufacturerDto> | null;
    page_index?: number;
    page_size?: number;
}