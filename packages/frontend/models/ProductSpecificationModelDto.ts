/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductSpecificationAttributeGroupModelDto } from './ProductSpecificationAttributeGroupModelDto';

export type ProductSpecificationModelDto = {
    /**
     * Gets or sets the grouped specification attribute models
     */
    groups?: Array<ProductSpecificationAttributeGroupModelDto> | null;
    custom_properties?: Record<string, any> | null;
}