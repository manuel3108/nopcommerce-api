/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProductsModelDto } from './CatalogProductsModelDto';
import type { PictureModelDto } from './PictureModelDto';

export type VendorModelDto = {
    name?: string | null;
    description?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_title?: string | null;
    se_name?: string | null;
    allow_customers_to_contact_vendors?: boolean;
    picture_model?: PictureModelDto;
    catalog_products_model?: CatalogProductsModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}