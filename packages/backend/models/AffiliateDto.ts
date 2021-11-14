/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an affiliate
 */
export type AffiliateDto = {
    /**
     * Gets or sets the address identifier
     */
    address_id?: number;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets the friendly name for generated affiliate URL (by default affiliate ID is used)
     */
    friendly_url_name?: string | null;
    /**
     * Gets or sets a value indicating whether the entity has been deleted
     */
    deleted?: boolean;
    /**
     * Gets or sets a value indicating whether the entity is active
     */
    active?: boolean;
    id?: number;
}