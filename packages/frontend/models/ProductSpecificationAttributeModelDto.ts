/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSpecificationAttributeValueModelDto } from './ProductSpecificationAttributeValueModelDto';

export type ProductSpecificationAttributeModelDto = {
    /**
     * Gets or sets the name
     */
    name?: string | null;
    /**
     * Gets or sets the values
     */
    values?: Array<ProductSpecificationAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}