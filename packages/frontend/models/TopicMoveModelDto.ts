/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelectListItemDto } from './SelectListItemDto';

export type TopicMoveModelDto = {
    forum_selected?: number;
    topic_se_name?: string | null;
    forum_list?: Array<SelectListItemDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}