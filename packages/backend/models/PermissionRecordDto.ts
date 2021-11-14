/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a permission record
 */
export type PermissionRecordDto = {
    /**
     * Gets or sets the permission name
     */
    name?: string | null;
    /**
     * Gets or sets the permission system name
     */
    system_name?: string | null;
    /**
     * Gets or sets the permission category
     */
    category?: string | null;
    id?: number;
}