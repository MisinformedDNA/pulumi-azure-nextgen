import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageAccountCredential(args: GetStorageAccountCredentialArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountCredentialResult>;
export interface GetStorageAccountCredentialArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The storage account credential name.
     */
    readonly name: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The storage account credential.
 */
export interface GetStorageAccountCredentialResult {
    /**
     * Encrypted storage key.
     */
    readonly accountKey?: outputs.databoxedge.v20190801.AsymmetricEncryptedSecretResponse;
    /**
     * Type of storage accessed on the storage account.
     */
    readonly accountType: string;
    /**
     * Alias for the storage account.
     */
    readonly alias: string;
    /**
     * Blob end point for private clouds.
     */
    readonly blobDomainName?: string;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    readonly connectionString?: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    readonly sslStatus: string;
    /**
     * Id of the storage account.
     */
    readonly storageAccountId?: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Username for the storage account.
     */
    readonly userName?: string;
}