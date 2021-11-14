/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProfileIndexModelDto = {
    customer_profile_id?: number;
    profile_title?: string | null;
    posts_page?: number;
    paging_posts?: boolean;
    forums_enabled?: boolean;
    custom_properties?: Record<string, any> | null;
}