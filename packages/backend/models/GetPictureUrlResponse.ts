/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PictureDto } from './PictureDto';

export type GetPictureUrlResponse = {
    /**
     * Picture URL
     */
    url?: string | null;
    picture?: PictureDto;
}