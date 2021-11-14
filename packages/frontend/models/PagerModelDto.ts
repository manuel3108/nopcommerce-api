/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseRouteValuesModelDto } from './BaseRouteValuesModelDto';

export type PagerModelDto = {
    /**
     * Gets the current page index
     */
    current_page?: number;
    /**
     * Gets or sets a count of individual pages to be displayed
     */
    individual_pages_displayed_count?: number;
    /**
     * Gets the current page index
     */
    page_index?: number;
    /**
     * Gets or sets a page size
     */
    page_size?: number;
    /**
     * Gets or sets a value indicating whether to show "first"
     */
    show_first?: boolean;
    /**
     * Gets or sets a value indicating whether to show "individual pages"
     */
    show_individual_pages?: boolean;
    /**
     * Gets or sets a value indicating whether to show "last"
     */
    show_last?: boolean;
    /**
     * Gets or sets a value indicating whether to show "next"
     */
    show_next?: boolean;
    /**
     * Gets or sets a value indicating whether to show pager items
     */
    show_pager_items?: boolean;
    /**
     * Gets or sets a value indicating whether to show "previous"
     */
    show_previous?: boolean;
    /**
     * Gets or sets a value indicating whether to show "total summary"
     */
    show_total_summary?: boolean;
    /**
     * Gets a total pages count
     */
    total_pages?: number;
    /**
     * Gets or sets a total records count
     */
    total_records?: number;
    /**
     * Gets or sets the route name or action name
     */
    route_action_name?: string | null;
    /**
     * Gets or sets whether the links are created using RouteLink instead of Action Link
 * (for additional route values such as slugs or page numbers)
     */
    use_route_links?: boolean;
    route_values?: BaseRouteValuesModelDto;
}