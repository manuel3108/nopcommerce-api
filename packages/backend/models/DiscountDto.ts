/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a discount
 */
export type DiscountDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the admin comment
     */
    admin_comment?: string | null;
    /**
     * Gets or sets the discount type identifier
     */
    discount_type_id?: number;
    /**
     * Gets or sets a value indicating whether to use percentage
     */
    use_percentage?: boolean;
    /**
     * Gets or sets the discount percentage
     */
    discount_percentage?: number;
    /**
     * Gets or sets the discount amount
     */
    discount_amount?: number;
    /**
     * Gets or sets the maximum discount amount (used with "UsePercentage")
     */
    maximum_discount_amount?: number | null;
    /**
     * Gets or sets the discount start date and time
     */
    start_date_utc?: string | null;
    /**
     * Gets or sets the discount end date and time
     */
    end_date_utc?: string | null;
    /**
     * Gets or sets a value indicating whether discount requires coupon code
     */
    requires_coupon_code?: boolean;
    /**
     * Gets or sets the coupon code
     */
    coupon_code?: string | null;
    /**
     * Gets or sets a value indicating whether discount can be used simultaneously with other discounts (with the same discount type)
     */
    is_cumulative?: boolean;
    /**
     * Gets or sets the discount limitation identifier
     */
    discount_limitation_id?: number;
    /**
     * Gets or sets the discount limitation times (used when Limitation is set to "N Times Only" or "N Times Per Customer")
     */
    limitation_times?: number;
    /**
     * Gets or sets the maximum product quantity which could be discounted
 * Used with "Assigned to products" or "Assigned to categories" type
     */
    maximum_discounted_quantity?: number | null;
    /**
     * Gets or sets value indicating whether it should be applied to all subcategories or the selected one
 * Used with "Assigned to categories" type only.
     */
    applied_to_sub_categories?: boolean;
    id?: number;
}