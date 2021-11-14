/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VendorNoteDto } from './VendorNoteDto';

export type VendorNoteVendorNoteDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<VendorNoteDto> | null;
    page_index?: number;
    page_size?: number;
}