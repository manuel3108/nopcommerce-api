/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a warehouse
 */
export type WarehouseDto = {
    /**
     * Gets or sets the warehouse name
     */
    name?: string | null;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets the address identifier of the warehouse
     */
    address_id?: number;
    id?: number;
}