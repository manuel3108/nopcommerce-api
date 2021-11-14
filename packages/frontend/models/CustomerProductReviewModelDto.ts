/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductReviewReviewTypeMappingModelDto } from './ProductReviewReviewTypeMappingModelDto';

export type CustomerProductReviewModelDto = {
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    title?: string | null;
    review_text?: string | null;
    reply_text?: string | null;
    rating?: number;
    written_on_str?: string | null;
    approval_status?: string | null;
    additional_product_review_list?: Array<ProductReviewReviewTypeMappingModelDto> | null;
    custom_properties?: Record<string, any> | null;
}