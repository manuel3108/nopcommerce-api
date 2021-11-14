/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a forum group
 */
export type ForumGroupDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of instance update
     */
    updated_on_utc?: string;
    id?: number;
}