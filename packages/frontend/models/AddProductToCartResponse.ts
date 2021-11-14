/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MiniShoppingCartModelDto } from './MiniShoppingCartModelDto';

export type AddProductToCartResponse = {
    errors?: Array<string> | null;
    success?: boolean;
    message?: string | null;
    model?: MiniShoppingCartModelDto;
}