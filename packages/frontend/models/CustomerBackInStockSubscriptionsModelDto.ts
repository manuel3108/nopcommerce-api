/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BackInStockSubscriptionModelDto } from './BackInStockSubscriptionModelDto';
import type { PagerModelDto } from './PagerModelDto';

export type CustomerBackInStockSubscriptionsModelDto = {
    subscriptions?: Array<BackInStockSubscriptionModelDto> | null;
    pager_model?: PagerModelDto;
    custom_properties?: Record<string, any> | null;
}