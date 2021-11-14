/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecificationAttributeValueFilterModelDto } from './SpecificationAttributeValueFilterModelDto';

/**
 * Represents a specification attribute filter model
 */
export type SpecificationAttributeFilterModelDto = {
    /**
     * Gets or sets the specification attribute name
     */
    name?: string | null;
    /**
     * Gets or sets the values
     */
    values?: Array<SpecificationAttributeValueFilterModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}