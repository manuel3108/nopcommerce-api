/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddBlogCommentModelDto } from './AddBlogCommentModelDto';
import type { BlogCommentModelDto } from './BlogCommentModelDto';

export type BlogPostModelDto = {
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_title?: string | null;
    se_name?: string | null;
    title?: string | null;
    body?: string | null;
    body_overview?: string | null;
    allow_comments?: boolean;
    number_of_comments?: number;
    created_on?: string;
    tags?: Array<string> | null;
    comments?: Array<BlogCommentModelDto> | null;
    add_new_comment?: AddBlogCommentModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}