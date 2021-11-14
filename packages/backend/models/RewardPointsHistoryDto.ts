/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a reward point history entry
 */
export type RewardPointsHistoryDto = {
    /**
     * Gets or sets the customer identifier
     */
    customer_id?: number;
    /**
     * Gets or sets the store identifier in which these reward points were awarded or redeemed
     */
    store_id?: number;
    /**
     * Gets or sets the points redeemed/added
     */
    points?: number;
    /**
     * Gets or sets the points balance
     */
    points_balance?: number | null;
    /**
     * Gets or sets the used amount
     */
    used_amount?: number;
    /**
     * Gets or sets the message
     */
    message?: string | null;
    /**
     * Gets or sets the date and time of instance creation
     */
    created_on_utc?: string;
    /**
     * Gets or sets the date and time when the points will no longer be valid
     */
    end_date_utc?: string | null;
    /**
     * Gets or sets the number of valid points that have not yet spent (only for positive amount of points)
     */
    valid_points?: number | null;
    /**
     * Used with order
     */
    used_with_order?: string | null;
    id?: number;
}