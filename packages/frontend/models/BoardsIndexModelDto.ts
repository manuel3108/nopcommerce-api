/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumGroupModelDto } from './ForumGroupModelDto';

export type BoardsIndexModelDto = {
    forum_groups?: Array<ForumGroupModelDto> | null;
    custom_properties?: Record<string, any> | null;
}