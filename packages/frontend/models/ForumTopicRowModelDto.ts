/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumTopicType } from './ForumTopicType';

export type ForumTopicRowModelDto = {
    subject?: string | null;
    se_name?: string | null;
    last_post_id?: number;
    num_posts?: number;
    views?: number;
    votes?: number;
    num_replies?: number;
    forum_topic_type?: ForumTopicType;
    customer_id?: number;
    allow_viewing_profiles?: boolean;
    customer_name?: string | null;
    total_post_pages?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}