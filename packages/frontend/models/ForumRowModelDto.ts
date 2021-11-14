/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ForumRowModelDto = {
    name?: string | null;
    se_name?: string | null;
    description?: string | null;
    num_topics?: number;
    num_posts?: number;
    last_post_id?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}