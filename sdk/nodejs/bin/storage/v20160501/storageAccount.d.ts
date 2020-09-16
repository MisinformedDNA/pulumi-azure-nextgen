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
     * Gets the creation date and time of the storage account in UTC.
     */
    readonly creationTime: pulumi.Output<string>;
    /**
     * Gets the custom domain the user assigned to this storage account.
     */
    readonly customDomain: pulumi.Output<outputs.storage.v20160501.CustomDomainResponse>;
    /**
     * Gets the encryption settings on the account. If unspecified, the account is unencrypted.
     */
    readonly encryption: pulumi.Output<outputs.storage.v20160501.EncryptionResponse>;
    /**
     * Gets the Kind.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly lastGeoFailoverTime: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    readonly primaryEndpoints: pulumi.Output<outputs.storage.v20160501.EndpointsResponse>;
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
    readonly secondaryEndpoints: pulumi.Output<outputs.storage.v20160501.EndpointsResponse>;
    /**
     * Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly secondaryLocation: pulumi.Output<string>;
    /**
     * Gets the SKU.
     */
    readonly sku: pulumi.Output<outputs.storage.v20160501.SkuResponse>;
    /**
     * Gets the status indicating whether the primary location of the storage account is available or unavailable.
     */
    readonly statusOfPrimary: pulumi.Output<string>;
    /**
     * Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
     */
    readonly statusOfSecondary: pulumi.Output<string>;
    /**
     * Tags assigned to a resource; can be used for viewing and grouping a resource (across resource groups).
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
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
     * User domain assigned to the storage account. Name is the CNAME source. Only one custom domain is supported per storage account at this time. To clear the existing custom domain, use an empty string for the custom domain name property.
     */
    readonly customDomain?: pulumi.Input<inputs.storage.v20160501.CustomDomain>;
    /**
     * Provides the encryption settings on the account. If left unspecified the account encryption settings will remain the same. The default setting is unencrypted.
     */
    readonly encryption?: pulumi.Input<inputs.storage.v20160501.Encryption>;
    /**
     * Required. Indicates the type of storage account.
     */
    readonly kind: pulumi.Input<string>;
    /**
     * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Required. Gets or sets the sku name.
     */
    readonly sku: pulumi.Input<inputs.storage.v20160501.Sku>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}