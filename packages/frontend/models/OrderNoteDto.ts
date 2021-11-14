/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderNoteDto = {
    has_download?: boolean;
    note?: string | null;
    created_on?: string;
    id?: number;
    custom_properties?: Record<string, any> | null;
}