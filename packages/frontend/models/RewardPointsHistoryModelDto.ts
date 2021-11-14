/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RewardPointsHistoryModelDto = {
    points?: number;
    points_balance?: string | null;
    message?: string | null;
    created_on?: string;
    end_date?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}