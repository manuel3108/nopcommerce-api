/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PollVotingRecordDto } from './PollVotingRecordDto';

export type PollVotingRecordPollVotingRecordDtoPagedListDto = {
    readonly total_count?: number;
    readonly total_pages?: number;
    readonly has_previous_page?: boolean;
    readonly has_next_page?: boolean;
    items?: Array<PollVotingRecordDto> | null;
    page_index?: number;
    page_size?: number;
}