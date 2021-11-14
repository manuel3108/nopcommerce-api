/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a model to get the catalog products
 */
export type CatalogProductsCommandDto = {
    /**
     * Gets or sets the price ('min-max' format)
     */
    price?: string | null;
    /**
     * Gets or sets the specification attribute option ids
     */
    specification_option_ids?: Array<number> | null;
    /**
     * Gets or sets the manufacturer ids
     */
    manufacturer_ids?: Array<number> | null;
    /**
     * Gets or sets a order by
     */
    order_by?: number | null;
    /**
     * Gets or sets a product sorting
     */
    view_mode?: string | null;
    /**
     * The current page index (starts from 0)
     */
    page_index?: number;
    /**
     * The current page number (starts from 1)
     */
    page_number?: number;
    /**
     * The number of items in each page.
     */
    page_size?: number;
    /**
     * The total number of items.
     */
    total_items?: number;
    /**
     * The total number of pages.
     */
    total_pages?: number;
    /**
     * The index of the first item in the page.
     */
    first_item?: number;
    /**
     * The index of the last item in the page.
     */
    last_item?: number;
    /**
     * Whether there are pages before the current page.
     */
    has_previous_page?: boolean;
    /**
     * Whether there are pages after the current page.
     */
    has_next_page?: boolean;
    custom_properties?: Record<string, any> | null;
}