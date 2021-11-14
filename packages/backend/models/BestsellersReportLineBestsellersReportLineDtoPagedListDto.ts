/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BestsellersReportLineDto } from './BestsellersReportLineDto';

export type BestsellersReportLineBestsellersReportLineDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<BestsellersReportLineDto> | null;
    page_index?: number;
    page_size?: number;
}