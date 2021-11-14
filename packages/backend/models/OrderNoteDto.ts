/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an order note
 */
export type OrderNoteDto = {
    /**
     * Gets or sets the order identifier
     */
    order_id?: number;
    /**
     * Gets or sets the note
     */
    note?: string | null;
    /**
     * Gets or sets the attached file (download) identifier
     */
    download_id?: number;
    /**
     * Gets or sets a value indicating whether a customer can see a note
     */
    display_to_customer?: boolean;
    /**
     * Gets or sets the date and time of order note creation
     */
    created_on_utc?: string;
    id?: number;
}