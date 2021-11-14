/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an order item
 */
export type OrderItemDto = {
    /**
     * Gets or sets the order item identifier
     */
    order_item_guid?: string;
    /**
     * Gets or sets the order identifier
     */
    order_id?: number;
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the quantity
     */
    quantity?: number;
    /**
     * Gets or sets the unit price in primary store currency (include tax)
     */
    unit_price_incl_tax?: number;
    /**
     * Gets or sets the unit price in primary store currency (exclude tax)
     */
    unit_price_excl_tax?: number;
    /**
     * Gets or sets the price in primary store currency (include tax)
     */
    price_incl_tax?: number;
    /**
     * Gets or sets the price in primary store currency (exclude tax)
     */
    price_excl_tax?: number;
    /**
     * Gets or sets the discount amount (include tax)
     */
    discount_amount_incl_tax?: number;
    /**
     * Gets or sets the discount amount (exclude tax)
     */
    discount_amount_excl_tax?: number;
    /**
     * Gets or sets the original cost of this order item (when an order was placed), qty 1
     */
    original_product_cost?: number;
    /**
     * Gets or sets the attribute description
     */
    attribute_description?: string | null;
    /**
     * Gets or sets the product attributes in XML format
     */
    attributes_xml?: string | null;
    /**
     * Gets or sets the download count
     */
    download_count?: number;
    /**
     * Gets or sets a value indicating whether download is activated
     */
    is_download_activated?: boolean;
    /**
     * Gets or sets a license download identifier (in case this is a downloadable product)
     */
    license_download_id?: number | null;
    /**
     * Gets or sets the total weight of one item
 * It's nullable for compatibility with the previous version of nopCommerce where was no such property
     */
    item_weight?: number | null;
    /**
     * Gets or sets the rental product start date (null if it's not a rental product)
     */
    rental_start_date_utc?: string | null;
    /**
     * Gets or sets the rental product end date (null if it's not a rental product)
     */
    rental_end_date_utc?: string | null;
    id?: number;
}