/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VendorNoteDto = {
    /**
     * Gets or sets the vendor identifier
     */
    vendor_id?: number;
    /**
     * Gets or sets the note
     */
    note?: string | null;
    /**
     * Gets or sets the date and time of vendor note creation
     */
    created_on_utc?: string;
    id?: number;
}