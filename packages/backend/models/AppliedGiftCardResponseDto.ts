/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GiftCardDto } from './GiftCardDto';

/**
 * Applied gift card
 */
export type AppliedGiftCardResponseDto = {
    /**
     * Gets or sets the used value
     */
    amount_can_be_used?: number;
    gift_card?: GiftCardDto;
}