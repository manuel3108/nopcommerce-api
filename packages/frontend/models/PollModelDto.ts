/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PollAnswerModelDto } from './PollAnswerModelDto';

export type PollModelDto = {
    name?: string | null;
    already_voted?: boolean;
    total_votes?: number;
    answers?: Array<PollAnswerModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}