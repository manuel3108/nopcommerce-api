/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurringProductCyclePeriod } from './RecurringProductCyclePeriod';

export type GetRecurringCycleInfoResponse = {
    /**
     * The error (if exists); otherwise, empty string
     */
    error?: string | null;
    /**
     * Cycle length
     */
    cycle_length?: number;
    cycle_period?: RecurringProductCyclePeriod;
    /**
     * Total cycles
     */
    total_cycles?: number;
}