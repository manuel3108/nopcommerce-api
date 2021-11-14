/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumPostModelDto } from './ForumPostModelDto';

export type ForumTopicPageModelDto = {
    subject?: string | null;
    se_name?: string | null;
    watch_topic_text?: string | null;
    is_customer_allowed_to_edit_topic?: boolean;
    is_customer_allowed_to_delete_topic?: boolean;
    is_customer_allowed_to_move_topic?: boolean;
    is_customer_allowed_to_subscribe?: boolean;
    forum_post_models?: Array<ForumPostModelDto> | null;
    posts_page_index?: number;
    posts_page_size?: number;
    posts_total_records?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}