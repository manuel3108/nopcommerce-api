/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a picture
 */
export type PictureDto = {
    /**
     * Gets or sets the picture mime type
     */
    mime_type?: string | null;
    /**
     * Gets or sets the SEO friendly filename of the picture
     */
    seo_filename?: string | null;
    /**
     * Gets or sets the "alt" attribute for "img" HTML element. If empty, then a default rule will be used (e.g. product name)
     */
    alt_attribute?: string | null;
    /**
     * Gets or sets the "title" attribute for "img" HTML element. If empty, then a default rule will be used (e.g. product name)
     */
    title_attribute?: string | null;
    /**
     * Gets or sets a value indicating whether the picture is new
     */
    is_new?: boolean;
    /**
     * Gets or sets the picture virtual path
     */
    virtual_path?: string | null;
    id?: number;
}