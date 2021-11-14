/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PasswordRecoveryModelDto = {
    email?: string | null;
    result?: string | null;
    display_captcha?: boolean;
    custom_properties?: Record<string, any> | null;
}