/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProductsCommandDto } from './CatalogProductsCommandDto';
import type { SearchModelDto } from './SearchModelDto';

export type SearchRequest = {
    model?: SearchModelDto;
    command?: CatalogProductsCommandDto;
}