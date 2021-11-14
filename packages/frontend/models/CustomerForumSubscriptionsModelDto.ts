/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ForumSubscriptionModelDto } from './ForumSubscriptionModelDto';
import type { PagerModelDto } from './PagerModelDto';

export type CustomerForumSubscriptionsModelDto = {
    forum_subscriptions?: Array<ForumSubscriptionModelDto> | null;
    pager_model?: PagerModelDto;
    custom_properties?: Record<string, any> | null;
}