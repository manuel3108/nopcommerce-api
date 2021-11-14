/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplyVendorModelDto } from './ApplyVendorModelDto';

export type ApplyVendorRequest = {
    picture_binary?: string | null;
    model?: ApplyVendorModelDto;
    form?: Record<string, string> | null;
}