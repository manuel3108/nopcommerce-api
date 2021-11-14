/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StockQuantityHistoryDto } from './StockQuantityHistoryDto';

export type StockQuantityHistoryStockQuantityHistoryDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<StockQuantityHistoryDto> | null;
    page_index?: number;
    page_size?: number;
}