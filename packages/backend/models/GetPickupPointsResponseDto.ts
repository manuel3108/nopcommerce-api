/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PickupPointDto } from './PickupPointDto';

export type GetPickupPointsResponseDto = {
    /**
     * Gets or sets a list of pickup points
     */
    pickup_points?: Array<PickupPointDto> | null;
    /**
     * Gets or sets errors
     */
    errors?: Array<string> | null;
    /**
     * Gets a value indicating whether request has been completed successfully
     */
    readonly success?: boolean;
}