/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EditorType } from './EditorType';
import type { SelectListItemDto } from './SelectListItemDto';

export type EditForumTopicModelDto = {
    is_edit?: boolean;
    forum_id?: number;
    forum_name?: string | null;
    forum_se_name?: string | null;
    topic_type_id?: number;
    forum_editor?: EditorType;
    subject?: string | null;
    text?: string | null;
    is_customer_allowed_to_set_topic_priority?: boolean;
    topic_priorities?: Array<SelectListItemDto> | null;
    is_customer_allowed_to_subscribe?: boolean;
    subscribed?: boolean;
    display_captcha?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}