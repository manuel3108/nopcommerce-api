/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VendorDto } from '../models/VendorDto';
import type { VendorNoteDto } from '../models/VendorNoteDto';
import type { VendorNoteVendorNoteDtoPagedListDto } from '../models/VendorNoteVendorNoteDtoPagedListDto';
import type { VendorVendorDtoPagedListDto } from '../models/VendorVendorDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VendorService {

    /**
     * Gets all vendors
     * @param name Vendor name
     * @param email Vendor email
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param showHidden A value indicating whether to show hidden records
     * @returns VendorVendorDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
name: string = '',
email: string = '',
pageIndex?: number,
pageSize: number = 2147483647,
showHidden: boolean = false,
): CancelablePromise<VendorVendorDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetAll`,
            query: {
                'name': name,
                'email': email,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a vendor by vendor identifier
     * @param id The vendor identifier
     * @returns VendorDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<VendorDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetById/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a vendor by product identifier
     * @param id The vendor identifier
     * @returns VendorDto Success
     * @throws ApiError
     */
    public static getGetByProductId(
id: number,
): CancelablePromise<VendorDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetByProductId/${id}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a vendor by product identifier
     * @param ids Array of vendor identifiers (separator - ;)
     * @returns VendorDto Success
     * @throws ApiError
     */
    public static getGetByProductIds(
ids: string,
): CancelablePromise<Array<VendorDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetByProductIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a vendors by customers identifiers
     * @param ids Array of customer identifiers (separator - ;)
     * @returns VendorDto Success
     * @throws ApiError
     */
    public static getGetByCustomerIds(
ids: string,
): CancelablePromise<Array<VendorDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetByCustomerIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Delete a vendor
     * @param id Vendor identifier
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Vendor/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a vendor
     * @param requestBody Vendor Dto
     * @returns VendorDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: VendorDto,
): CancelablePromise<VendorDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Vendor/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Updates the vendor
     * @param requestBody Vendor Dto model
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: VendorDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Vendor/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a vendor note
     * @param vendorNoteId The vendor note identifier
     * @returns VendorNoteDto Success
     * @throws ApiError
     */
    public static getGetVendorNoteById(
vendorNoteId: number,
): CancelablePromise<VendorNoteDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetVendorNoteById/${vendorNoteId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets all vendor notes
     * @param vendorId Vendor identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns VendorNoteVendorNoteDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetVendorNotesByVendor(
vendorId: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<VendorNoteVendorNoteDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Vendor/GetVendorNotesByVendor/${vendorId}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Deletes a vendor note
     * @param id The vendor note id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDeleteVendorNote(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Vendor/DeleteVendorNote/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Inserts a vendor note
     * @param requestBody Vendor note
     * @returns any Success
     * @throws ApiError
     */
    public static putInsertVendorNote(
requestBody?: VendorNoteDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Vendor/InsertVendorNote`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}