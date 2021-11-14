/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumRowModelDto } from './ForumRowModelDto';

export type ForumGroupModelDto = {
    name?: string | null;
    se_name?: string | null;
    forums?: Array<ForumRowModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}