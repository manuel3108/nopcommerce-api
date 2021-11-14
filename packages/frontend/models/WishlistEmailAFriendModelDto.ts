/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WishlistEmailAFriendModelDto = {
    friend_email?: string | null;
    your_email_address?: string | null;
    personal_message?: string | null;
    successfully_sent?: boolean;
    result?: string | null;
    display_captcha?: boolean;
    custom_properties?: Record<string, any> | null;
}