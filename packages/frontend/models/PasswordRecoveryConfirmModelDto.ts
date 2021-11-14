/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PasswordRecoveryConfirmModelDto = {
    new_password?: string | null;
    confirm_new_password?: string | null;
    disable_password_changing?: boolean;
    result?: string | null;
    return_url?: string | null;
    custom_properties?: Record<string, any> | null;
}