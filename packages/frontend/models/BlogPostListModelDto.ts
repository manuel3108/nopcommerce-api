/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogPagingFilteringModelDto } from './BlogPagingFilteringModelDto';
import type { BlogPostModelDto } from './BlogPostModelDto';

export type BlogPostListModelDto = {
    working_language_id?: number;
    paging_filtering_context?: BlogPagingFilteringModelDto;
    blog_posts?: Array<BlogPostModelDto> | null;
    custom_properties?: Record<string, any> | null;
}