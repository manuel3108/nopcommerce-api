/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SelectListGroupDto } from './SelectListGroupDto';

export type SelectListItemDto = {
    disabled?: boolean;
    group?: SelectListGroupDto;
    selected?: boolean;
    text?: string | null;
    value?: string | null;
}