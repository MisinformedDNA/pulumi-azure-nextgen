import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The storage account.
 */
export declare class StorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccount;
    /**
     * Returns true if the given object is an instance of StorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageAccount;
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier used for billing.
     */
    readonly accessTier: pulumi.Output<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
     */
    readonly allowBlobPublicAccess: pulumi.Output<boolean | undefined>;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    readonly azureFilesIdentityBasedAuthentication: pulumi.Output<outputs.storage.v20190401.AzureFilesIdentityBasedAuthenticationResponse | undefined>;
    /**
     * Gets the creation date and time of the storage account in UTC.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets the custom domain the user assigned to this storage account.
     */
    readonly customDomain: pulumi.Output<outputs.storage.v20190401.CustomDomainResponse>;
    /**
     * Allows https traffic only to storage service if sets to true.
     */
    readonly enableHttpsTrafficOnly: pulumi.Output<boolean | undefined>;
    /**
     * Gets the encryption settings on the account. If unspecified, the account is unencrypted.
     */
    readonly encryption: pulumi.Output<outputs.storage.v20190401.EncryptionResponse>;
    /**
     * If the failover is in progress, the value will be true, otherwise, it will be null.
     */
    readonly failoverInProgress: pulumi.Output<boolean>;
    /**
     * Geo Replication Stats
     */
    readonly geoReplicationStats: pulumi.Output<outputs.storage.v20190401.GeoReplicationStatsResponse>;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.storage.v20190401.IdentityResponse | undefined>;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    readonly isHnsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Gets the Kind.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    readonly largeFileSharesState: pulumi.Output<string | undefined>;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly lastGeoFailoverTime: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    readonly location: pulumi.Output<string>;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    readonly minimumTlsVersion: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Network rule set
     */
    readonly networkRuleSet: pulumi.Output<outputs.storage.v20190401.NetworkRuleSetResponse>;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    readonly primaryEndpoints: pulumi.Output<outputs.storage.v20190401.EndpointsResponse>;
    /**
     * Gets the location of the primary data center for the storage account.
     */
    readonly primaryLocation: pulumi.Output<string>;
    /**
     * Gets the status of the storage account at the time the operation was called.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
     */
    readonly secondaryEndpoints: pulumi.Output<outputs.storage.v20190401.EndpointsResponse>;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly secondaryLocation: pulumi.Output<string>;
    /**
     * Gets the SKU.
     */
    readonly sku: pulumi.Output<outputs.storage.v20190401.SkuResponse>;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     */
    readonly statusOfPrimary: pulumi.Output<string>;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     */
    readonly statusOfSecondary: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a StorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a StorageAccount resource.
 */
export interface StorageAccountArgs {
    /**
     * Required for storage accounts where kind = BlobStorage. The access tier used for billing.
     */
    readonly accessTier?: pulumi.Input<string>;
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
     */
    readonly allowBlobPublicAccess?: pulumi.Input<boolean>;
    /**
     * Provides the identity based authentication settings for Azure Files.
     */
    readonly azureFilesIdentityBasedAuthentication?: pulumi.Input<inputs.storage.v20190401.AzureFilesIdentityBasedAuthentication>;
    /**
     * User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
     */
    readonly customDomain?: pulumi.Input<inputs.storage.v20190401.CustomDomain>;
    /**
     * Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01.
     */
    readonly enableHttpsTrafficOnly?: pulumi.Input<boolean>;
    /**
     * Not applicable. Azure Storage encryption is enabled for all storage accounts and cannot be disabled.
     */
    readonly encryption?: pulumi.Input<inputs.storage.v20190401.Encryption>;
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.storage.v20190401.Identity>;
    /**
     * Account HierarchicalNamespace enabled if sets to true.
     */
    readonly isHnsEnabled?: pulumi.Input<boolean>;
    /**
     * Required. Indicates the type of storage account.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
     */
    readonly largeFileSharesState?: pulumi.Input<string>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
     */
    readonly minimumTlsVersion?: pulumi.Input<string>;
    /**
     * Network rule set
     */
    readonly networkRuleSet?: pulumi.Input<inputs.storage.v20190401.NetworkRuleSet>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Required. Gets or sets the SKU name.
     */
    readonly sku: pulumi.Input<inputs.storage.v20190401.Sku>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}