/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a stock quantity change entry
 */
export type StockQuantityHistoryDto = {
    /**
     * Gets or sets the stock quantity adjustment
     */
    quantity_adjustment?: number;
    /**
     * Gets or sets current stock quantity
     */
    stock_quantity?: number;
    /**
     * Gets or sets the message
     */
    message?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the product attribute combination identifier
     */
    combination_id?: number | null;
    /**
     * Gets or sets the warehouse identifier
     */
    warehouse_id?: number | null;
    id?: number;
}