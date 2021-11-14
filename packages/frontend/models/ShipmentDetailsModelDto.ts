/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderDetailsModelDto } from './OrderDetailsModelDto';
import type { ShipmentItemModelDto } from './ShipmentItemModelDto';
import type { ShipmentStatusEventModelDto } from './ShipmentStatusEventModelDto';

export type ShipmentDetailsModelDto = {
    tracking_number?: string | null;
    tracking_number_url?: string | null;
    shipped_date?: string | null;
    delivery_date?: string | null;
    shipment_status_events?: Array<ShipmentStatusEventModelDto> | null;
    show_sku?: boolean;
    items?: Array<ShipmentItemModelDto> | null;
    order?: OrderDetailsModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}