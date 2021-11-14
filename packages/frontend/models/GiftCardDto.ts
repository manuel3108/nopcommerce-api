/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GiftCardDto = {
    coupon_code?: string | null;
    amount?: string | null;
    remaining?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}