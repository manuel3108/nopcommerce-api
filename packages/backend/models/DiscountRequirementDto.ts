/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a discount requirement
 */
export type DiscountRequirementDto = {
    /**
     * Gets or sets the discount identifier
     */
    discount_id?: number;
    /**
     * Gets or sets the discount requirement rule system name
     */
    discount_requirement_rule_system_name?: string | null;
    /**
     * Gets or sets the parent requirement identifier
     */
    parent_id?: number | null;
    /**
     * Gets or sets an interaction type identifier (has a value for the group and null for the child requirements)
     */
    interaction_type_id?: number | null;
    /**
     * Gets or sets a value indicating whether this requirement has any child requirements
     */
    is_group?: boolean;
    id?: number;
}