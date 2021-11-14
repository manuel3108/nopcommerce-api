/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an activity log type record
 */
export type ActivityLogTypeDto = {
    /**
     * Gets or sets the system keyword
     */
    system_keyword?: string | null;
    /**
     * Gets or sets the display name
     */
    name?: string | null;
    /**
     * Gets or sets a value indicating whether the activity log type is enabled
     */
    enabled?: boolean;
    id?: number;
}