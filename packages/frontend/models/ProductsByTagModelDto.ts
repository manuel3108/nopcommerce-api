/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProductsModelDto } from './CatalogProductsModelDto';

export type ProductsByTagModelDto = {
    tag_name?: string | null;
    tag_se_name?: string | null;
    catalog_products_model?: CatalogProductsModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}