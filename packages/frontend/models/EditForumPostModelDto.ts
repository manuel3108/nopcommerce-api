/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EditorType } from './EditorType';

export type EditForumPostModelDto = {
    forum_topic_id?: number;
    is_edit?: boolean;
    text?: string | null;
    forum_editor?: EditorType;
    forum_name?: string | null;
    forum_topic_subject?: string | null;
    forum_topic_se_name?: string | null;
    is_customer_allowed_to_subscribe?: boolean;
    subscribed?: boolean;
    display_captcha?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}