/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumTopicRowModelDto } from './ForumTopicRowModelDto';

export type ActiveDiscussionsModelDto = {
    readonly forum_topics?: Array<ForumTopicRowModelDto> | null;
    view_all_link_enabled?: boolean;
    active_discussions_feed_enabled?: boolean;
    topic_page_size?: number;
    topic_total_records?: number;
    topic_page_index?: number;
    posts_page_size?: number;
    allow_post_voting?: boolean;
    custom_properties?: Record<string, any> | null;
}