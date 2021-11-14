/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a measure dimension
 */
export type MeasureDimensionDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the system keyword
     */
    system_keyword?: string | null;
    /**
     * Gets or sets the ratio
     */
    ratio?: number;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}