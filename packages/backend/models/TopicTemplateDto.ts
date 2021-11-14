/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a topic template
 */
export type TopicTemplateDto = {
    /**
     * Gets or sets the template name
     */
    name?: string | null;
    /**
     * Gets or sets the view path
     */
    view_path?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    id?: number;
}