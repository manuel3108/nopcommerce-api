/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductAttributeModelDto } from './ProductAttributeModelDto';

export type ProductCombinationModelDto = {
    /**
     * Gets or sets the attributes
     */
    attributes?: Array<ProductAttributeModelDto> | null;
    /**
     * Gets or sets a value indicating whether to the combination have stock
     */
    in_stock?: boolean;
    custom_properties?: Record<string, any> | null;
}