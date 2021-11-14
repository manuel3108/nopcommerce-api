/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PollAnswerModelDto = {
    name?: string | null;
    number_of_votes?: number;
    percent_of_total_votes?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}