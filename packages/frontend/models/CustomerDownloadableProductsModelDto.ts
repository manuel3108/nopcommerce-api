/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownloadableProductsModelDto } from './DownloadableProductsModelDto';

export type CustomerDownloadableProductsModelDto = {
    items?: Array<DownloadableProductsModelDto> | null;
    custom_properties?: Record<string, any> | null;
}