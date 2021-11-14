/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeasureWeightDto } from '../models/MeasureWeightDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MeasureWeightService {

    /**
     * Gets a measure weight by system keyword
     * @param systemKeyword The system keyword
     * @returns MeasureWeightDto Success
     * @throws ApiError
     */
    public static getGetBySystemKeyword(
systemKeyword: string,
): CancelablePromise<MeasureWeightDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/GetBySystemKeyword`,
            query: {
                'systemKeyword': systemKeyword,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts weight
     * @param value Value to convert
     * @param sourceMeasureWeightId Source weight
     * @param targetMeasureWeightId Target weight
     * @param round A value indicating whether a result should be rounded
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertWeight(
value: number,
sourceMeasureWeightId: number,
targetMeasureWeightId: number,
round: boolean = true,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/ConvertWeight/${sourceMeasureWeightId}/${targetMeasureWeightId}`,
            query: {
                'value': value,
                'round': round,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts from primary weight
     * @param value Value to convert
     * @param measureWeightId Target weight Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertFromPrimaryMeasureWeight(
value: number,
measureWeightId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/ConvertFromPrimaryMeasureWeight/${measureWeightId}`,
            query: {
                'value': value,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Converts to primary measure weight
     * @param value Value to convert
     * @param measureWeightId Source weight Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertToPrimaryMeasureWeight(
value: number,
measureWeightId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/ConvertToPrimaryMeasureWeight/${measureWeightId}`,
            query: {
                'value': value,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/MeasureWeight/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns MeasureWeightDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<MeasureWeightDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @returns MeasureWeightDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<MeasureWeightDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureWeight/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns MeasureWeightDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: MeasureWeightDto,
): CancelablePromise<MeasureWeightDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/MeasureWeight/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: MeasureWeightDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/MeasureWeight/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}