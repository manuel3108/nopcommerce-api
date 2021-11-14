/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumTopicRowModelDto } from './ForumTopicRowModelDto';
import type { SelectListItemDto } from './SelectListItemDto';

export type SearchBoardsModelDto = {
    show_advanced_search?: boolean;
    search_terms?: string | null;
    forum_id?: number | null;
    within?: number | null;
    limit_days?: number | null;
    forum_topics?: Array<ForumTopicRowModelDto> | null;
    topic_page_size?: number;
    topic_total_records?: number;
    topic_page_index?: number;
    limit_list?: Array<SelectListItemDto> | null;
    forum_list?: Array<SelectListItemDto> | null;
    within_list?: Array<SelectListItemDto> | null;
    forum_id_selected?: number;
    within_selected?: number;
    limit_days_selected?: number;
    search_results_visible?: boolean;
    no_results_visisble?: boolean;
    error?: string | null;
    posts_page_size?: number;
    allow_post_voting?: boolean;
    custom_properties?: Record<string, any> | null;
}