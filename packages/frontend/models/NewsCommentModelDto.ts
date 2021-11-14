/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewsCommentModelDto = {
    customer_id?: number;
    customer_name?: string | null;
    customer_avatar_url?: string | null;
    comment_title?: string | null;
    comment_text?: string | null;
    created_on?: string;
    allow_viewing_profiles?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}