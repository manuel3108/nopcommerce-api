/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a shipment
 */
export type ShipmentDto = {
    /**
     * Gets or sets the order identifier
     */
    order_id?: number;
    /**
     * Gets or sets the tracking number of this shipment
     */
    tracking_number?: string | null;
    /**
     * Gets or sets the total weight of this shipment
 * It's nullable for compatibility with the previous version of nopCommerce where was no such property
     */
    total_weight?: number | null;
    /**
     * Gets or sets the shipped date and time
     */
    shipped_date_utc?: string | null;
    /**
     * Gets or sets the delivery date and time
     */
    delivery_date_utc?: string | null;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets the entity creation date
     */
    created_on_utc?: string;
    id?: number;
}