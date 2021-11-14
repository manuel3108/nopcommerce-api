/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VendorInfoModelDto } from './VendorInfoModelDto';

export type InfoRequest = {
    picture_binary?: string | null;
    model?: VendorInfoModelDto;
    form?: Record<string, string> | null;
}