/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddProductReviewModelDto = {
    title?: string | null;
    review_text?: string | null;
    rating?: number;
    display_captcha?: boolean;
    can_current_customer_leave_review?: boolean;
    successfully_added?: boolean;
    can_add_new_review?: boolean;
    result?: string | null;
    custom_properties?: Record<string, any> | null;
}