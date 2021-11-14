/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProductsModelDto } from './CatalogProductsModelDto';
import type { PictureModelDto } from './PictureModelDto';
import type { ProductOverviewModelDto } from './ProductOverviewModelDto';

export type ManufacturerModelDto = {
    name?: string | null;
    description?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_title?: string | null;
    se_name?: string | null;
    picture_model?: PictureModelDto;
    featured_products?: Array<ProductOverviewModelDto> | null;
    catalog_products_model?: CatalogProductsModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}