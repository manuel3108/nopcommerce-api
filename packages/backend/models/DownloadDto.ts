/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a download
 */
export type DownloadDto = {
    /**
     * Gets or sets a GUID
     */
    download_guid?: string;
    /**
     * Gets or sets a value indicating whether DownloadUrl property should be used
     */
    use_download_url?: boolean;
    /**
     * Gets or sets a download URL
     */
    download_url?: string | null;
    /**
     * Gets or sets the download binary
     */
    download_binary?: string | null;
    /**
     * The mime-type of the download
     */
    content_type?: string | null;
    /**
     * The filename of the download
     */
    filename?: string | null;
    /**
     * Gets or sets the extension
     */
    extension?: string | null;
    /**
     * Gets or sets a value indicating whether the download is new
     */
    is_new?: boolean;
    id?: number;
}