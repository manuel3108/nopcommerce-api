/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a poll answer
 */
export type PollAnswerDto = {
    /**
     * Gets or sets the poll identifier
     */
    poll_id?: number;
    /**
     * Gets or sets the poll answer name
     */
    name?: string | null;
    /**
     * Gets or sets the current number of votes
     */
    number_of_votes?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}