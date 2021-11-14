/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductDto } from './ProductDto';

export type ProductProductDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<ProductDto> | null;
    page_index?: number;
    page_size?: number;
}