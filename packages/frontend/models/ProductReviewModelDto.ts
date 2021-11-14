/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductReviewHelpfulnessModelDto } from './ProductReviewHelpfulnessModelDto';
import type { ProductReviewReviewTypeMappingModelDto } from './ProductReviewReviewTypeMappingModelDto';

export type ProductReviewModelDto = {
    customer_id?: number;
    customer_avatar_url?: string | null;
    customer_name?: string | null;
    allow_viewing_profiles?: boolean;
    title?: string | null;
    review_text?: string | null;
    reply_text?: string | null;
    rating?: number;
    written_on_str?: string | null;
    helpfulness?: ProductReviewHelpfulnessModelDto;
    additional_product_review_list?: Array<ProductReviewReviewTypeMappingModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}