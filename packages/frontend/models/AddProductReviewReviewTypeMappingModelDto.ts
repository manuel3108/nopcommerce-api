/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddProductReviewReviewTypeMappingModelDto = {
    product_review_id?: number;
    review_type_id?: number;
    rating?: number;
    name?: string | null;
    description?: string | null;
    display_order?: number;
    is_required?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}