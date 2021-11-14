/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a category
 */
export type CategoryDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the description
     */
    description?: string | null;
    /**
     * Gets or sets a value of used category template identifier
     */
    category_template_id?: number;
    /**
     * Gets or sets the meta keywords
     */
    meta_keywords?: string | null;
    /**
     * Gets or sets the meta description
     */
    meta_description?: string | null;
    /**
     * Gets or sets the meta title
     */
    meta_title?: string | null;
    /**
     * Gets or sets the parent category identifier
     */
    parent_category_id?: number;
    /**
     * Gets or sets the picture identifier
     */
    picture_id?: number;
    /**
     * Gets or sets the page size
     */
    page_size?: number;
    /**
     * Gets or sets a value indicating whether customers can select the page size
     */
    allow_customers_to_select_page_size?: boolean;
    /**
     * Gets or sets the available customer selectable page size options
     */
    page_size_options?: string | null;
    /**
     * Gets or sets a value indicating whether to show the category on home page
     */
    show_on_homepage?: boolean;
    /**
     * Gets or sets a value indicating whether to include this category in the top menu
     */
    include_in_top_menu?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is subject to ACL
     */
    subject_to_acl?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets a value indicating whether the entity has been deleted
     */
    deleted?: boolean;
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
    /**
     * Gets or sets a value indicating whether the price range filtering is enabled
     */
    price_range_filtering?: boolean;
    /**
     * Gets or sets the "from" price
     */
    price_from?: number;
    /**
     * Gets or sets the "to" price
     */
    price_to?: number;
    /**
     * Gets or sets a value indicating whether the price range should be entered manually
     */
    manually_price_range?: boolean;
    id?: number;
}