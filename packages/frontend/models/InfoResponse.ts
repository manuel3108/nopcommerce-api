/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerInfoModelDto } from './CustomerInfoModelDto';

export type InfoResponse = {
    model?: CustomerInfoModelDto;
    errors?: Array<string> | null;
}