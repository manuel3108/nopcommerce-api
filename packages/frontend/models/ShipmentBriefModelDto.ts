/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShipmentBriefModelDto = {
    tracking_number?: string | null;
    shipped_date?: string | null;
    delivery_date?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}