/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a plugin descriptor
 */
export type PluginDescriptorDto = {
    /**
     * Gets or sets the plugin group
     */
    group?: string | null;
    /**
     * Gets or sets the plugin friendly name
     */
    friendly_name?: string | null;
    /**
     * Gets or sets the supported versions of nopCommerce
     */
    supported_versions?: Array<string> | null;
    /**
     * Gets or sets the author
     */
    author?: string | null;
    /**
     * Gets or sets the display order
     */
    display_order?: number;
    /**
     * Gets or sets the name of the assembly file
     */
    assembly_file_name?: string | null;
    /**
     * Gets or sets the description
     */
    description?: string | null;
    /**
     * Gets or sets the list of store identifiers in which this plugin is available. If empty, then this plugin is available in all stores
     */
    limited_to_stores?: Array<number> | null;
    /**
     * Gets or sets the list of customer role identifiers for which this plugin is available. If empty, then this plugin is available for all ones.
     */
    limited_to_customer_roles?: Array<number> | null;
    /**
     * Gets or sets the list of plugins' system name that this plugin depends on
     */
    depends_on?: Array<string> | null;
    /**
     * Gets or sets the plugin system name
     */
    system_name?: string | null;
    /**
     * Gets or sets the version
     */
    version?: string | null;
}