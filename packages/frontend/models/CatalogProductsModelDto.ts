/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ManufacturerFilterModelDto } from './ManufacturerFilterModelDto';
import type { PriceRangeFilterModelDto } from './PriceRangeFilterModelDto';
import type { ProductOverviewModelDto } from './ProductOverviewModelDto';
import type { SelectListItemDto } from './SelectListItemDto';
import type { SpecificationFilterModelDto } from './SpecificationFilterModelDto';

/**
 * Represents a catalog products model
 */
export type CatalogProductsModelDto = {
    /**
     * Get or set a value indicating whether use standart or AJAX products loading (applicable to 'paging', 'filtering', 'view modes') in catalog
     */
    use_ajax_loading?: boolean;
    /**
     * Gets or sets the warning message
     */
    warning_message?: string | null;
    /**
     * Gets or sets the message if there are no products to return
     */
    no_result_message?: string | null;
    price_range_filter?: PriceRangeFilterModelDto;
    specification_filter?: SpecificationFilterModelDto;
    manufacturer_filter?: ManufacturerFilterModelDto;
    /**
     * Gets or sets a value indicating whether product sorting is allowed
     */
    allow_product_sorting?: boolean;
    /**
     * Gets or sets available sort options
     */
    available_sort_options?: Array<SelectListItemDto> | null;
    /**
     * Gets or sets a value indicating whether customers are allowed to change view mode
     */
    allow_product_view_mode_changing?: boolean;
    /**
     * Gets or sets available view mode options
     */
    available_view_modes?: Array<SelectListItemDto> | null;
    /**
     * Gets or sets a value indicating whether customers are allowed to select page size
     */
    allow_customers_to_select_page_size?: boolean;
    /**
     * Gets or sets available page size options
     */
    page_size_options?: Array<SelectListItemDto> | null;
    /**
     * Gets or sets a order by
     */
    order_by?: number | null;
    /**
     * Gets or sets a product sorting
     */
    view_mode?: string | null;
    /**
     * Gets or sets the products
     */
    products?: Array<ProductOverviewModelDto> | null;
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