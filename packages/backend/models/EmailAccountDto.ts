/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents an email account
 */
export type EmailAccountDto = {
    /**
     * Gets or sets an email address
     */
    email?: string | null;
    /**
     * Gets or sets an email display name
     */
    display_name?: string | null;
    /**
     * Gets or sets an email host
     */
    host?: string | null;
    /**
     * Gets or sets an email port
     */
    port?: number;
    /**
     * Gets or sets an email user name
     */
    username?: string | null;
    /**
     * Gets or sets an email password
     */
    password?: string | null;
    /**
     * Gets or sets a value that controls whether the SmtpClient uses Secure Sockets Layer (SSL) to encrypt the connection
     */
    enable_ssl?: boolean;
    /**
     * Gets or sets a value that controls whether the default system credentials of the application are sent with requests.
     */
    use_default_credentials?: boolean;
    id?: number;
}