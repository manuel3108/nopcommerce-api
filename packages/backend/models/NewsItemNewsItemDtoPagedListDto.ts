/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NewsItemDto } from './NewsItemDto';

export type NewsItemNewsItemDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<NewsItemDto> | null;
    page_index?: number;
    page_size?: number;
}