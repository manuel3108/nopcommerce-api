/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentMethodModelDto } from './PaymentMethodModelDto';

export type CheckoutPaymentMethodModelDto = {
    payment_methods?: Array<PaymentMethodModelDto> | null;
    display_reward_points?: boolean;
    reward_points_balance?: number;
    reward_points_amount?: string | null;
    reward_points_enough_to_pay_for_order?: boolean;
    use_reward_points?: boolean;
    custom_properties?: Record<string, any> | null;
}