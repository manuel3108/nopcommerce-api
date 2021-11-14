/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecificationAttributeFilterModelDto } from './SpecificationAttributeFilterModelDto';

/**
 * Represents a specification filter model
 */
export type SpecificationFilterModelDto = {
    /**
     * Gets or sets a value indicating whether filtering is enabled
     */
    enabled?: boolean;
    /**
     * Gets or sets the filtrable specification attributes
     */
    attributes?: Array<SpecificationAttributeFilterModelDto> | null;
    custom_properties?: Record<string, any> | null;
}