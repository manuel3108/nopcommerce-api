/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AttributeControlType } from './AttributeControlType';
import type { CustomerAttributeValueModelDto } from './CustomerAttributeValueModelDto';

export type CustomerAttributeModelDto = {
    name?: string | null;
    is_required?: boolean;
    /**
     * Default value
     */
    default_value?: string | null;
    attribute_control_type?: AttributeControlType;
    values?: Array<CustomerAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}