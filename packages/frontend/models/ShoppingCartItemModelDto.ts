/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureModelDto } from './PictureModelDto';
import type { SelectListItemDto } from './SelectListItemDto';

export type ShoppingCartItemModelDto = {
    sku?: string | null;
    vendor_name?: string | null;
    picture?: PictureModelDto;
    product_id?: number;
    product_name?: string | null;
    product_se_name?: string | null;
    unit_price?: string | null;
    sub_total?: string | null;
    discount?: string | null;
    maximum_discounted_qty?: number | null;
    quantity?: number;
    allowed_quantities?: Array<SelectListItemDto> | null;
    attribute_info?: string | null;
    recurring_info?: string | null;
    rental_info?: string | null;
    allow_item_editing?: boolean;
    disable_removal?: boolean;
    warnings?: Array<string> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}