/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductDetailsModelDto } from './ProductDetailsModelDto';

export type ProductDetailsResponse = {
    /**
     * The product template view path
     */
    product_template_view_path?: string | null;
    product_details_model?: ProductDetailsModelDto;
}