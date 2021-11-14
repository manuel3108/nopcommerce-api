/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a shipment item
 */
export type ShipmentItemDto = {
    /**
     * Gets or sets the shipment identifier
     */
    shipment_id?: number;
    /**
     * Gets or sets the order item identifier
     */
    order_item_id?: number;
    /**
     * Gets or sets the quantity
     */
    quantity?: number;
    /**
     * Gets or sets the warehouse identifier
     */
    warehouse_id?: number;
    id?: number;
}