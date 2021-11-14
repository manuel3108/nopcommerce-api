/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductReviewOverviewModelDto = {
    product_id?: number;
    rating_sum?: number;
    total_reviews?: number;
    allow_customer_reviews?: boolean;
    can_add_new_review?: boolean;
    custom_properties?: Record<string, any> | null;
}