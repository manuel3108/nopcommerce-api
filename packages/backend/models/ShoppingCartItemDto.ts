/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a shopping cart item
 */
export type ShoppingCartItemDto = {
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the shopping cart type identifier
     */
    shopping_cart_type_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the product attributes in XML format
     */
    attributes_xml?: string | null;
    /**
     * Gets or sets the price enter by a customer
     */
    customer_entered_price?: number;
    /**
     * Gets or sets the quantity
     */
    quantity?: number;
    /**
     * Gets or sets the rental product start date (null if it's not a rental product)
     */
    rental_start_date_utc?: string | null;
    /**
     * Gets or sets the rental product end date (null if it's not a rental product)
     */
    rental_end_date_utc?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of instance update
     */
    updated_on_utc?: string;
    id?: number;
}