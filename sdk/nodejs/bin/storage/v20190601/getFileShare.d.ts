import * as pulumi from "@pulumi/pulumi";
export declare function getFileShare(args: GetFileShareArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareResult>;
export interface GetFileShareArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * Optional, used to expand the properties within share's properties.
     */
    readonly expand?: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
     */
    readonly shareName: string;
}
/**
 * Properties of the file share, including Id, resource name, resource type, Etag.
 */
export interface GetFileShareResult {
    /**
     * Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
     */
    readonly accessTier?: string;
    /**
     * Indicates the last modification time for share access tier.
     */
    readonly accessTierChangeTime: string;
    /**
     * Indicates if there is a pending transition for access tier.
     */
    readonly accessTierStatus: string;
    /**
     * Indicates whether the share was deleted.
     */
    readonly deleted: boolean;
    /**
     * The deleted time if the share was deleted.
     */
    readonly deletedTime: string;
    /**
     * The authentication protocol that is used for the file share. Can only be specified when creating a share.
     */
    readonly enabledProtocols?: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Returns the date and time the share was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * A name-value pair to associate with the share as metadata.
     */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Remaining retention days for share that was soft deleted.
     */
    readonly remainingRetentionDays: number;
    /**
     * The property is for NFS share only. The default is NoRootSquash.
     */
    readonly rootSquash?: string;
    /**
     * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
     */
    readonly shareQuota?: number;
    /**
     * The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.
     */
    readonly shareUsageBytes: number;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The version of the share.
     */
    readonly version: string;
}