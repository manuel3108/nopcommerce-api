/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SendPrivateMessageModelDto = {
    to_customer_id?: number;
    customer_to_name?: string | null;
    allow_viewing_to_profile?: boolean;
    reply_to_message_id?: number;
    subject?: string | null;
    message?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}