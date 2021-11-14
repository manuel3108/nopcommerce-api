/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a return request
 */
export type ReturnRequestDto = {
    /**
     * Custom number of return request
     */
    custom_number?: string | null;
    /**
     * Gets or sets the store identifier
     */
    store_id?: number;
    /**
     * Gets or sets the order item identifier
     */
    order_item_id?: number;
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the quantity
     */
    quantity?: number;
    /**
     * Gets or sets the reason to return
     */
    reason_for_return?: string | null;
    /**
     * Gets or sets the requested action
     */
    requested_action?: string | null;
    /**
     * Gets or sets the customer comments
     */
    customer_comments?: string | null;
    /**
     * Gets or sets identifier of the file (Download) uploaded by the customer
     */
    uploaded_file_id?: number;
    /**
     * Gets or sets the staff notes
     */
    staff_notes?: string | null;
    /**
     * Gets or sets the return status identifier
     */
    return_request_status_id?: number;
    /**
     * Gets or sets the date and time of entity creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time of entity update
     */
    updated_on_utc?: string;
    id?: number;
}