/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumTopicRowModelDto } from './ForumTopicRowModelDto';

export type ForumPageModelDto = {
    name?: string | null;
    se_name?: string | null;
    description?: string | null;
    watch_forum_text?: string | null;
    forum_topics?: Array<ForumTopicRowModelDto> | null;
    topic_page_size?: number;
    topic_total_records?: number;
    topic_page_index?: number;
    is_customer_allowed_to_subscribe?: boolean;
    forum_feeds_enabled?: boolean;
    posts_page_size?: number;
    allow_post_voting?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}