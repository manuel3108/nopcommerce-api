/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CategorySimpleModelDto = {
    name?: string | null;
    se_name?: string | null;
    number_of_products?: number | null;
    include_in_top_menu?: boolean;
    sub_categories?: Array<CategorySimpleModelDto> | null;
    have_sub_categories?: boolean;
    route?: string | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}