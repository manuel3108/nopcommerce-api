/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an ACL record
 */
export type AclRecordDto = {
    /**
     * Gets or sets the entity identifier
     */
    entity_id?: number;
    /**
     * Gets or sets the entity name
     */
    entity_name?: string | null;
    /**
     * Gets or sets the customer role identifier
     */
    customer_role_id?: number;
    id?: number;
}