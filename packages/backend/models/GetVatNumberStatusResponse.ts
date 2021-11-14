/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VatNumberStatus } from './VatNumberStatus';

export type GetVatNumberStatusResponse = {
    vat_number_status?: VatNumberStatus;
    /**
     * Company name
     */
    name?: string | null;
    /**
     * Address
     */
    address?: string | null;
}