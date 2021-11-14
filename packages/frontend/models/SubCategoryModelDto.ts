/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureModelDto } from './PictureModelDto';

export type SubCategoryModelDto = {
    name?: string | null;
    se_name?: string | null;
    description?: string | null;
    picture_model?: PictureModelDto;
    id?: number;
    custom_properties?: Record<string, any> | null;
}