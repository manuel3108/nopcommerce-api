/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReviewTypeModelDto = {
    name?: string | null;
    description?: string | null;
    display_order?: number;
    is_required?: boolean;
    visible_to_all_customers?: boolean;
    average_rating?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}