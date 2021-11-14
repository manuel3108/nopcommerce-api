/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GdprConsentModelDto = {
    message?: string | null;
    is_required?: boolean;
    required_message?: string | null;
    accepted?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}