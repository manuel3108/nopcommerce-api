/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShipmentStatusEventModelDto = {
    event_name?: string | null;
    location?: string | null;
    country?: string | null;
    date?: string | null;
    custom_properties?: Record<string, any> | null;
}