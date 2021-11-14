/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ForumSubscriptionModelDto = {
    forum_id?: number;
    forum_topic_id?: number;
    topic_subscription?: boolean;
    title?: string | null;
    slug?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}