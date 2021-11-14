/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BackInStockSubscribeModelDto = {
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    is_current_customer_registered?: boolean;
    subscription_allowed?: boolean;
    already_subscribed?: boolean;
    maximum_back_in_stock_subscriptions?: number;
    current_number_of_back_in_stock_subscriptions?: number;
    custom_properties?: Record<string, any> | null;
}