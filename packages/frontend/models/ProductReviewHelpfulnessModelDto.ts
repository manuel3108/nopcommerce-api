/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductReviewHelpfulnessModelDto = {
    product_review_id?: number;
    helpful_yes_total?: number;
    helpful_no_total?: number;
    custom_properties?: Record<string, any> | null;
}