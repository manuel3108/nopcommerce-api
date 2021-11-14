/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssociatedExternalAuthModelDto = {
    email?: string | null;
    external_identifier?: string | null;
    auth_method_name?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}