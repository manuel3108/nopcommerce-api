/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerProductReviewModelDto } from './CustomerProductReviewModelDto';
import type { PagerModelDto } from './PagerModelDto';

export type CustomerProductReviewsModelDto = {
    product_reviews?: Array<CustomerProductReviewModelDto> | null;
    pager_model?: PagerModelDto;
    custom_properties?: Record<string, any> | null;
}