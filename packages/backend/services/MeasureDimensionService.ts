/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeasureDimensionDto } from '../models/MeasureDimensionDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MeasureDimensionService {

    /**
     * Converts dimension
     * @param value Value to convert
     * @param sourceMeasureDimensionId Source dimension
     * @param targetMeasureDimensionId Target dimension
     * @param round A value indicating whether a result should be rounded
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertDimension(
value: number,
sourceMeasureDimensionId: number,
targetMeasureDimensionId: number,
round: boolean = true,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/ConvertDimension/${sourceMeasureDimensionId}/${targetMeasureDimensionId}`,
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
     * Converts from primary dimension
     * @param value Value to convert
     * @param measureDimensionId Target dimension Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertFromPrimaryMeasureDimension(
value: number,
measureDimensionId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/ConvertFromPrimaryMeasureDimension/${measureDimensionId}`,
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
     * Converts to primary measure dimension
     * @param value Value to convert
     * @param measureDimensionId Source dimension Id
     * @returns number Success
     * @throws ApiError
     */
    public static getConvertToPrimaryMeasureDimension(
value: number,
measureDimensionId: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/ConvertToPrimaryMeasureDimension/${measureDimensionId}`,
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
            path: `/api-backend/MeasureDimension/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns MeasureDimensionDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<MeasureDimensionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a measure dimension by system keyword
     * @param systemKeyword The system keyword
     * @returns MeasureDimensionDto Success
     * @throws ApiError
     */
    public static getGetBySystemKeyword(
systemKeyword: string,
): CancelablePromise<MeasureDimensionDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/GetBySystemKeyword`,
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
     * Gets all measure dimensions
     * @returns MeasureDimensionDto Success
     * @throws ApiError
     */
    public static getGetAll(): CancelablePromise<Array<MeasureDimensionDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/MeasureDimension/GetAll`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns MeasureDimensionDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: MeasureDimensionDto,
): CancelablePromise<MeasureDimensionDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/MeasureDimension/Create`,
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
requestBody?: MeasureDimensionDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/MeasureDimension/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}