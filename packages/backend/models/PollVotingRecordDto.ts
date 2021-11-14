/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a poll voting record
 */
export type PollVotingRecordDto = {
    /**
     * Gets or sets the poll answer identifier
     */
    poll_answer_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    id?: number;
}