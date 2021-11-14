/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a record to manage product inventory per warehouse
 */
export type ProductWarehouseInventoryDto = {
    /**
     * Gets or sets the product identifier
     */
    product_id?: number;
    /**
     * Gets or sets the warehouse identifier
     */
    warehouse_id?: number;
    /**
     * Gets or sets the stock quantity
     */
    stock_quantity?: number;
    /**
     * Gets or sets the reserved quantity (ordered but not shipped yet)
     */
    reserved_quantity?: number;
    id?: number;
}