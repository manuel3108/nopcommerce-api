/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagerModelDto } from './PagerModelDto';
import type { RewardPointsHistoryModelDto } from './RewardPointsHistoryModelDto';

export type CustomerRewardPointsModelDto = {
    reward_points?: Array<RewardPointsHistoryModelDto> | null;
    pager_model?: PagerModelDto;
    reward_points_balance?: number;
    reward_points_amount?: string | null;
    minimum_reward_points_balance?: number;
    minimum_reward_points_amount?: string | null;
    custom_properties?: Record<string, any> | null;
}