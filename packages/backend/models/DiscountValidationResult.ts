/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DiscountValidationResult = {
    /**
     * Gets or sets a value indicating whether discount is valid
     */
    is_valid?: boolean;
    /**
     * Gets or sets the errors that a customer should see when entering a coupon code (in case if "IsValid" is set to "false")
     */
    errors?: Array<string> | null;
}