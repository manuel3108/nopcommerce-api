/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddNewsCommentModelDto = {
    comment_title?: string | null;
    comment_text?: string | null;
    display_captcha?: boolean;
    custom_properties?: Record<string, any> | null;
}