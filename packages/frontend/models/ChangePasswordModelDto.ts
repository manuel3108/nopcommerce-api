/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangePasswordModelDto = {
    old_password?: string | null;
    new_password?: string | null;
    confirm_new_password?: string | null;
    custom_properties?: Record<string, any> | null;
}