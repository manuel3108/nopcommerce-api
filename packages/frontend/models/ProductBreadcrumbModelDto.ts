/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategorySimpleModelDto } from './CategorySimpleModelDto';

export type ProductBreadcrumbModelDto = {
    enabled?: boolean;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    category_breadcrumb?: Array<CategorySimpleModelDto> | null;
    custom_properties?: Record<string, any> | null;
}