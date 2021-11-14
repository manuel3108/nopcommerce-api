/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductTagModelDto } from './ProductTagModelDto';

export type PopularProductTagsModelDto = {
    total_tags?: number;
    tags?: Array<ProductTagModelDto> | null;
    custom_properties?: Record<string, any> | null;
}