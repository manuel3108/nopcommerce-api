/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SitemapItemModelDto } from './SitemapItemModelDto';
import type { SitemapPageModelDto } from './SitemapPageModelDto';

export type SitemapModelDto = {
    items?: Array<SitemapItemModelDto> | null;
    page_model?: SitemapPageModelDto;
    custom_properties?: Record<string, any> | null;
}