/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductReviewReviewTypeMappingModelDto = {
    product_review_id?: number;
    review_type_id?: number;
    rating?: number;
    name?: string | null;
    visible_to_all_customers?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}