/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureModelDto } from './PictureModelDto';
import type { ProductOverviewProductPriceModelDto } from './ProductOverviewProductPriceModelDto';
import type { ProductReviewOverviewModelDto } from './ProductReviewOverviewModelDto';
import type { ProductSpecificationModelDto } from './ProductSpecificationModelDto';
import type { ProductType } from './ProductType';

export type ProductOverviewModelDto = {
    name?: string | null;
    short_description?: string | null;
    full_description?: string | null;
    se_name?: string | null;
    sku?: string | null;
    product_type?: ProductType;
    mark_as_new?: boolean;
    product_price?: ProductOverviewProductPriceModelDto;
    default_picture_model?: PictureModelDto;
    product_specification_model?: ProductSpecificationModelDto;
    review_overview_model?: ProductReviewOverviewModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}