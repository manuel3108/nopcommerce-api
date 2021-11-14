/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BasePageableModelDto } from './BasePageableModelDto';
import type { NewsItemModelDto } from './NewsItemModelDto';

export type NewsItemListModelDto = {
    working_language_id?: number;
    paging_filtering_context?: BasePageableModelDto;
    news_items?: Array<NewsItemModelDto> | null;
    custom_properties?: Record<string, any> | null;
}