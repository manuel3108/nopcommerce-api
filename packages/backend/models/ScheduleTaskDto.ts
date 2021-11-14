/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a schedule task
 */
export type ScheduleTaskDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the run period (in seconds)
     */
    seconds?: number;
    /**
     * Gets or sets the type of appropriate IScheduleTask class
     */
    type?: string | null;
    /**
     * Gets or sets the value indicating whether a task is enabled
     */
    enabled?: boolean;
    /**
     * Gets or sets the value indicating whether a task should be stopped on some error
     */
    stop_on_error?: boolean;
    /**
     * Gets or sets the datetime when it was started last time
     */
    last_start_utc?: string | null;
    /**
     * Gets or sets the datetime when it was finished last time (no matter failed is success)
     */
    last_end_utc?: string | null;
    /**
     * Gets or sets the datetime when it was successfully finished last time
     */
    last_success_utc?: string | null;
    id?: number;
}