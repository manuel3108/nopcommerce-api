/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureModelDto } from './PictureModelDto';

export type ProductAttributeValueModelDto = {
    name?: string | null;
    color_squares_rgb?: string | null;
    image_squares_picture_model?: PictureModelDto;
    price_adjustment?: string | null;
    price_adjustment_use_percentage?: boolean;
    price_adjustment_value?: number;
    is_pre_selected?: boolean;
    picture_id?: number;
    customer_enters_qty?: boolean;
    quantity?: number;
    id?: number;
    custom_properties?: Record<string, any> | null;
}