/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product template
 */
export type ProductTemplateDto = {
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
    /**
     * Gets or sets a comma-separated list of product type identifiers NOT supported by this template
     */
    ignored_product_types?: string | null;
    id?: number;
}