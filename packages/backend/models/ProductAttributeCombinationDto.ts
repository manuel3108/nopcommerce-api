/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a product attribute combination
 */
export type ProductAttributeCombinationDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the attributes
     */
    attributes_xml?: string | null;
    /**
     * Gets or sets the stock quantity
     */
    stock_quantity?: number;
    /**
     * Gets or sets a value indicating whether to allow orders when out of stock
     */
    allow_out_of_stock_orders?: boolean;
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
     * Gets or sets the attribute combination price. This way a store owner can override the default product price when this attribute combination is added to the cart. For example, you can give a discount this way.
     */
    overridden_price?: number | null;
    /**
     * Gets or sets the quantity when admin should be notified
     */
    notify_admin_for_quantity_below?: number;
    /**
     * Gets or sets the identifier of picture associated with this combination
     */
    picture_id?: number;
    /**
     * Gets or sets the minimum stock quantity
     */
    min_stock_quantity?: number;
    id?: number;
}