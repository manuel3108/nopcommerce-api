/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddProductReviewModelDto } from './AddProductReviewModelDto';
import type { AddProductReviewReviewTypeMappingModelDto } from './AddProductReviewReviewTypeMappingModelDto';
import type { ProductReviewModelDto } from './ProductReviewModelDto';
import type { ReviewTypeModelDto } from './ReviewTypeModelDto';

export type ProductReviewsModelDto = {
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    items?: Array<ProductReviewModelDto> | null;
    add_product_review?: AddProductReviewModelDto;
    review_type_list?: Array<ReviewTypeModelDto> | null;
    add_additional_product_review_list?: Array<AddProductReviewReviewTypeMappingModelDto> | null;
    custom_properties?: Record<string, any> | null;
}