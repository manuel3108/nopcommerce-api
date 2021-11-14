/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureModelDto } from './PictureModelDto';

export type MiniShoppingCartItemModelDto = {
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    quantity?: number;
    unit_price?: string | null;
    attribute_info?: string | null;
    picture?: PictureModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}