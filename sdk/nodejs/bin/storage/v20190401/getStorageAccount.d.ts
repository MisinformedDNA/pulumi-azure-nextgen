import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getStorageAccount(args: GetStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountResult>;
export interface GetStorageAccountArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats.
     */
    readonly expand?: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The storage account.
 */
export interface GetStorageAccountResult {
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier used for billing.
     */
    readonly accessTier: string;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
     */
    readonly allowBlobPublicAccess?: boolean;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    readonly azureFilesIdentityBasedAuthentication?: outputs.storage.v20190401.AzureFilesIdentityBasedAuthenticationResponse;
    /**
     * Gets the creation date and time of the storage account in UTC.
     */
    readonly creationTime: string;
    /**
     * Gets the custom domain the user assigned to this storage account.
     */
    readonly customDomain: outputs.storage.v20190401.CustomDomainResponse;
    /**
     * Allows https traffic only to storage service if sets to true.
     */
    readonly enableHttpsTrafficOnly?: boolean;
    /**
     * Gets the encryption settings on the account. If unspecified, the account is unencrypted.
     */
    readonly encryption: outputs.storage.v20190401.EncryptionResponse;
    /**
     * If the failover is in progress, the value will be true, otherwise, it will be null.
     */
    readonly failoverInProgress: boolean;
    /**
     * Geo Replication Stats
     */
    readonly geoReplicationStats: outputs.storage.v20190401.GeoReplicationStatsResponse;
    /**
     * The identity of the resource.
     */
    readonly identity?: outputs.storage.v20190401.IdentityResponse;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    readonly isHnsEnabled?: boolean;
    /**
     * Gets the Kind.
     */
    readonly kind: string;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    readonly largeFileSharesState?: string;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly lastGeoFailoverTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    readonly minimumTlsVersion?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network rule set
     */
    readonly networkRuleSet: outputs.storage.v20190401.NetworkRuleSetResponse;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    readonly primaryEndpoints: outputs.storage.v20190401.EndpointsResponse;
    /**
     * Gets the location of the primary data center for the storage account.
     */
    readonly primaryLocation: string;
    /**
     * Gets the status of the storage account at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
     */
    readonly secondaryEndpoints: outputs.storage.v20190401.EndpointsResponse;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly secondaryLocation: string;
    /**
     * Gets the SKU.
     */
    readonly sku: outputs.storage.v20190401.SkuResponse;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     */
    readonly statusOfPrimary: string;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     */
    readonly statusOfSecondary: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}