/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReturnRequestActionModelDto } from './ReturnRequestActionModelDto';
import type { ReturnRequestOrderItemModelDto } from './ReturnRequestOrderItemModelDto';
import type { ReturnRequestReasonModelDto } from './ReturnRequestReasonModelDto';

export type SubmitReturnRequestModelDto = {
    order_id?: number;
    custom_order_number?: string | null;
    items?: Array<ReturnRequestOrderItemModelDto> | null;
    return_request_reason_id?: number;
    available_return_reasons?: Array<ReturnRequestReasonModelDto> | null;
    return_request_action_id?: number;
    available_return_actions?: Array<ReturnRequestActionModelDto> | null;
    comments?: string | null;
    allow_files?: boolean;
    uploaded_file_guid?: string;
    result?: string | null;
    custom_properties?: Record<string, any> | null;
}