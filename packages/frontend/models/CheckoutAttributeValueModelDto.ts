/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckoutAttributeValueModelDto = {
    name?: string | null;
    color_squares_rgb?: string | null;
    price_adjustment?: string | null;
    is_pre_selected?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}