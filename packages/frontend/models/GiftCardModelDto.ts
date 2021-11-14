/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GiftCardType } from './GiftCardType';

export type GiftCardModelDto = {
    is_gift_card?: boolean;
    recipient_name?: string | null;
    recipient_email?: string | null;
    sender_name?: string | null;
    sender_email?: string | null;
    message?: string | null;
    gift_card_type?: GiftCardType;
    custom_properties?: Record<string, any> | null;
}