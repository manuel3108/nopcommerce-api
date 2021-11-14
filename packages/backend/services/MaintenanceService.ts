/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MaintenanceService {

    /**
     * Gets all backup files
     * @returns string Success
     * @throws ApiError
     */
    public static getGetAllBackupFiles(): CancelablePromise<Array<string>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Maintenance/GetAllBackupFiles`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Creates a path to a new database backup file
     * @returns string Success
     * @throws ApiError
     */
    public static getCreateNewBackupFilePath(): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Maintenance/CreateNewBackupFilePath`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Returns the path to the backup file
     * @param backupFileName The name of the backup file
     * @returns string Success
     * @throws ApiError
     */
    public static getGetBackupPath(
backupFileName: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Maintenance/GetBackupPath`,
            query: {
                'backupFileName': backupFileName,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}