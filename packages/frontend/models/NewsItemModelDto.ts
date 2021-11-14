/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddNewsCommentModelDto } from './AddNewsCommentModelDto';
import type { NewsCommentModelDto } from './NewsCommentModelDto';

export type NewsItemModelDto = {
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_title?: string | null;
    se_name?: string | null;
    title?: string | null;
    short?: string | null;
    full?: string | null;
    allow_comments?: boolean;
    number_of_comments?: number;
    created_on?: string;
    comments?: Array<NewsCommentModelDto> | null;
    add_new_comment?: AddNewsCommentModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}