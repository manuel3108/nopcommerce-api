/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginDescriptorDto } from '../models/PluginDescriptorDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PluginService {

    /**
     * Get plugin descriptors
     * @param customerId Filter by  customer; pass null to load all records
     * @param storeId Filter by store; pass 0 to load all records
     * @param group Filter by plugin group; pass null to load all records
     * @param dependsOnSystemName System name of the plugin to define dependencies
     * @param friendlyName Filter by plugin friendly name; pass null to load all records
     * @param author Filter by plugin author; pass null to load all records
     * @returns PluginDescriptorDto Success
     * @throws ApiError
     */
    public static getGetPluginDescriptors(
customerId?: number,
storeId?: number,
group?: string,
dependsOnSystemName: string = '',
friendlyName?: string,
author?: string,
): CancelablePromise<Array<PluginDescriptorDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Plugin/GetPluginDescriptors`,
            query: {
                'customerId': customerId,
                'storeId': storeId,
                'group': group,
                'dependsOnSystemName': dependsOnSystemName,
                'friendlyName': friendlyName,
                'author': author,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}