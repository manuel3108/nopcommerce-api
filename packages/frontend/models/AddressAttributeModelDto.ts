/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressAttributeValueModelDto } from './AddressAttributeValueModelDto';
import type { AttributeControlType } from './AttributeControlType';

export type AddressAttributeModelDto = {
    name?: string | null;
    is_required?: boolean;
    default_value?: string | null;
    attribute_control_type?: AttributeControlType;
    values?: Array<AddressAttributeValueModelDto> | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}