/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product
 */
export type ProductDto = {
    /**
     * Gets or sets the product type identifier
     */
    product_type_id?: number;
    /**
     * Gets or sets the parent product identifier. It's used to identify associated products (only with "grouped" products)
     */
    parent_grouped_product_id?: number;
    /**
     * Gets or sets the values indicating whether this product is visible in catalog or search results.
 * It's used when this product is associated to some "grouped" one
 * This way associated products could be accessed/added/etc only from a grouped product details page
     */
    visible_individually?: boolean;
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the short description
     */
    short_description?: string | null;
    /**
     * Gets or sets the full description
     */
    full_description?: string | null;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets a value of used product template identifier
     */
    product_template_id?: number;
    /**
     * Gets or sets a vendor identifier
     */
    vendor_id?: number;
    /**
     * Gets or sets a value indicating whether to show the product on home page
     */
    show_on_homepage?: boolean;
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
     * Gets or sets a value indicating whether the product allows customer reviews
     */
    allow_customer_reviews?: boolean;
    /**
     * Gets or sets the rating sum (approved reviews)
     */
    approved_rating_sum?: number;
    /**
     * Gets or sets the rating sum (not approved reviews)
     */
    not_approved_rating_sum?: number;
    /**
     * Gets or sets the total rating votes (approved reviews)
     */
    approved_total_reviews?: number;
    /**
     * Gets or sets the total rating votes (not approved reviews)
     */
    not_approved_total_reviews?: number;
    /**
     * Gets or sets a value indicating whether the entity is subject to ACL
     */
    subject_to_acl?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is limited/restricted to certain stores
     */
    limited_to_stores?: boolean;
    /**
     * Gets or sets the SKU
     */
    sku?: string | null;
    /**
     * Gets or sets the manufacturer part number
     */
    manufacturer_part_number?: string | null;
    /**
     * Gets or sets the Global Trade Item Number (GTIN). These identifiers include UPC (in North America), EAN (in Europe), JAN (in Japan), and ISBN (for books).
     */
    gtin?: string | null;
    /**
     * Gets or sets a value indicating whether the product is gift card
     */
    is_gift_card?: boolean;
    /**
     * Gets or sets the gift card type identifier
     */
    gift_card_type_id?: number;
    /**
     * Gets or sets gift card amount that can be used after purchase. If not specified, then product price will be used.
     */
    overridden_gift_card_amount?: number | null;
    /**
     * Gets or sets a value indicating whether the product requires that other products are added to the cart (Product X requires Product Y)
     */
    require_other_products?: boolean;
    /**
     * Gets or sets a required product identifiers (comma separated)
     */
    required_product_ids?: string | null;
    /**
     * Gets or sets a value indicating whether required products are automatically added to the cart
     */
    automatically_add_required_products?: boolean;
    /**
     * Gets or sets a value indicating whether the product is download
     */
    is_download?: boolean;
    /**
     * Gets or sets the download identifier
     */
    download_id?: number;
    /**
     * Gets or sets a value indicating whether this downloadable product can be downloaded unlimited number of times
     */
    unlimited_downloads?: boolean;
    /**
     * Gets or sets the maximum number of downloads
     */
    max_number_of_downloads?: number;
    /**
     * Gets or sets the number of days during customers keeps access to the file.
     */
    download_expiration_days?: number | null;
    /**
     * Gets or sets the download activation type
     */
    download_activation_type_id?: number;
    /**
     * Gets or sets a value indicating whether the product has a sample download file
     */
    has_sample_download?: boolean;
    /**
     * Gets or sets the sample download identifier
     */
    sample_download_id?: number;
    /**
     * Gets or sets a value indicating whether the product has user agreement
     */
    has_user_agreement?: boolean;
    /**
     * Gets or sets the text of license agreement
     */
    user_agreement_text?: string | null;
    /**
     * Gets or sets a value indicating whether the product is recurring
     */
    is_recurring?: boolean;
    /**
     * Gets or sets the cycle length
     */
    recurring_cycle_length?: number;
    /**
     * Gets or sets the cycle period
     */
    recurring_cycle_period_id?: number;
    /**
     * Gets or sets the total cycles
     */
    recurring_total_cycles?: number;
    /**
     * Gets or sets a value indicating whether the product is rental
     */
    is_rental?: boolean;
    /**
     * Gets or sets the rental length for some period (price for this period)
     */
    rental_price_length?: number;
    /**
     * Gets or sets the rental period (price for this period)
     */
    rental_price_period_id?: number;
    /**
     * Gets or sets a value indicating whether the entity is ship enabled
     */
    is_ship_enabled?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is free shipping
     */
    is_free_shipping?: boolean;
    /**
     * Gets or sets a value this product should be shipped separately (each item)
     */
    ship_separately?: boolean;
    /**
     * Gets or sets the additional shipping charge
     */
    additional_shipping_charge?: number;
    /**
     * Gets or sets a delivery date identifier
     */
    delivery_date_id?: number;
    /**
     * Gets or sets a value indicating whether the product is marked as tax exempt
     */
    is_tax_exempt?: boolean;
    /**
     * Gets or sets the tax category identifier
     */
    tax_category_id?: number;
    /**
     * Gets or sets a value indicating whether the product is telecommunications or broadcasting or electronic services
     */
    is_telecommunications_or_broadcasting_or_electronic_services?: boolean;
    /**
     * Gets or sets a value indicating how to manage inventory
     */
    manage_inventory_method_id?: number;
    /**
     * Gets or sets a product availability range identifier
     */
    product_availability_range_id?: number;
    /**
     * Gets or sets a value indicating whether multiple warehouses are used for this product
     */
    use_multiple_warehouses?: boolean;
    /**
     * Gets or sets a warehouse identifier
     */
    warehouse_id?: number;
    /**
     * Gets or sets the stock quantity
     */
    stock_quantity?: number;
    /**
     * Gets or sets a value indicating whether to display stock availability
     */
    display_stock_availability?: boolean;
    /**
     * Gets or sets a value indicating whether to display stock quantity
     */
    display_stock_quantity?: boolean;
    /**
     * Gets or sets the minimum stock quantity
     */
    min_stock_quantity?: number;
    /**
     * Gets or sets the low stock activity identifier
     */
    low_stock_activity_id?: number;
    /**
     * Gets or sets the quantity when admin should be notified
     */
    notify_admin_for_quantity_below?: number;
    /**
     * Gets or sets a value backorder mode identifier
     */
    backorder_mode_id?: number;
    /**
     * Gets or sets a value indicating whether to back in stock subscriptions are allowed
     */
    allow_back_in_stock_subscriptions?: boolean;
    /**
     * Gets or sets the order minimum quantity
     */
    order_minimum_quantity?: number;
    /**
     * Gets or sets the order maximum quantity
     */
    order_maximum_quantity?: number;
    /**
     * Gets or sets the comma separated list of allowed quantities. null or empty if any quantity is allowed
     */
    allowed_quantities?: string | null;
    /**
     * Gets or sets a value indicating whether we allow adding to the cart/wishlist only attribute combinations that exist and have stock greater than zero.
 * This option is used only when we have "manage inventory" set to "track inventory by product attributes"
     */
    allow_adding_only_existing_attribute_combinations?: boolean;
    /**
     * Gets or sets a value indicating whether this product is returnable (a customer is allowed to submit return request with this product)
     */
    not_returnable?: boolean;
    /**
     * Gets or sets a value indicating whether to disable buy (Add to cart) button
     */
    disable_buy_button?: boolean;
    /**
     * Gets or sets a value indicating whether to disable "Add to wishlist" button
     */
    disable_wishlist_button?: boolean;
    /**
     * Gets or sets a value indicating whether this item is available for Pre-Order
     */
    available_for_pre_order?: boolean;
    /**
     * Gets or sets the start date and time of the product availability (for pre-order products)
     */
    pre_order_availability_start_date_time_utc?: string | null;
    /**
     * Gets or sets a value indicating whether to show "Call for Pricing" or "Call for quote" instead of price
     */
    call_for_price?: boolean;
    /**
     * Gets or sets the price
     */
    price?: number;
    /**
     * Gets or sets the old price
     */
    old_price?: number;
    /**
     * Gets or sets the product cost
     */
    product_cost?: number;
    /**
     * Gets or sets a value indicating whether a customer enters price
     */
    customer_enters_price?: boolean;
    /**
     * Gets or sets the minimum price entered by a customer
     */
    minimum_customer_entered_price?: number;
    /**
     * Gets or sets the maximum price entered by a customer
     */
    maximum_customer_entered_price?: number;
    /**
     * Gets or sets a value indicating whether base price (PAngV) is enabled. Used by German users.
     */
    baseprice_enabled?: boolean;
    /**
     * Gets or sets an amount in product for PAngV
     */
    baseprice_amount?: number;
    /**
     * Gets or sets a unit of product for PAngV (MeasureWeight entity)
     */
    baseprice_unit_id?: number;
    /**
     * Gets or sets a reference amount for PAngV
     */
    baseprice_base_amount?: number;
    /**
     * Gets or sets a reference unit for PAngV (MeasureWeight entity)
     */
    baseprice_base_unit_id?: number;
    /**
     * Gets or sets a value indicating whether this product is marked as new
     */
    mark_as_new?: boolean;
    /**
     * Gets or sets the start date and time of the new product (set product as "New" from date). Leave empty to ignore this property
     */
    mark_as_new_start_date_time_utc?: string | null;
    /**
     * Gets or sets the end date and time of the new product (set product as "New" to date). Leave empty to ignore this property
     */
    mark_as_new_end_date_time_utc?: string | null;
    /**
     * Gets or sets a value indicating whether this product has tier prices configured
 * <remarks>The same as if we run TierPrices.Count > 0
 * We use this property for performance optimization:
 * if this property is set to false, then we do not need to load tier prices navigation property
 * </remarks>
     */
    has_tier_prices?: boolean;
    /**
     * Gets or sets a value indicating whether this product has discounts applied
 * <remarks>The same as if we run AppliedDiscounts.Count > 0
 * We use this property for performance optimization:
 * if this property is set to false, then we do not need to load Applied Discounts navigation property
 * </remarks>
     */
    has_discounts_applied?: boolean;
    /**
     * Gets or sets the weight
     */
    weight?: number;
    /**
     * Gets or sets the length
     */
    length?: number;
    /**
     * Gets or sets the width
     */
    width?: number;
    /**
     * Gets or sets the height
     */
    height?: number;
    /**
     * Gets or sets the available start date and time
     */
    available_start_date_time_utc?: string | null;
    /**
     * Gets or sets the available end date and time
     */
    available_end_date_time_utc?: string | null;
    /**
     * Gets or sets a display order.
 * This value is used when sorting associated products (used with "grouped" products)
 * This value is used when sorting home page products
     */
    display_order?: number;
    /**
     * Gets or sets a value indicating whether the entity is published
     */
    published?: boolean;
    /**
     * Gets or sets a value indicating whether the entity has been deleted
     */
    deleted?: boolean;
    /**
     * Gets or sets the date and time of product creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of product update
     */
    updated_on_utc?: string;
    id?: number;
}