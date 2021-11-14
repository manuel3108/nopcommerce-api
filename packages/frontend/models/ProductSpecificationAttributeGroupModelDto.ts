/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSpecificationAttributeModelDto } from './ProductSpecificationAttributeModelDto';

export type ProductSpecificationAttributeGroupModelDto = {
    /**
     * Gets or sets the specification attribute group name
     */
    name?: string | null;
    /**
     * Gets or sets the specification attribute group attributes
     */
    attributes?: Array<ProductSpecificationAttributeModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}