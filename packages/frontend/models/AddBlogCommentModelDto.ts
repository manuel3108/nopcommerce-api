/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddBlogCommentModelDto = {
    comment_text?: string | null;
    display_captcha?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}