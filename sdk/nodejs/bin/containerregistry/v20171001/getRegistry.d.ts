import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRegistry(args: GetRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryResult>;
export interface GetRegistryArgs {
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * An object that represents a container registry.
 */
export interface GetRegistryResult {
    /**
     * The value that indicates whether the admin user is enabled.
     */
    readonly adminUserEnabled?: boolean;
    /**
     * The creation date of the container registry in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The URL that can be used to log into the container registry.
     */
    readonly loginServer: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The network rule set for a container registry.
     */
    readonly networkRuleSet?: outputs.containerregistry.v20171001.NetworkRuleSetResponse;
    /**
     * The provisioning state of the container registry at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The SKU of the container registry.
     */
    readonly sku: outputs.containerregistry.v20171001.SkuResponse;
    /**
     * The status of the container registry at the time the operation was called.
     */
    readonly status: outputs.containerregistry.v20171001.StatusResponse;
    /**
     * The properties of the storage account for the container registry. Only applicable to Classic SKU.
     */
    readonly storageAccount?: outputs.containerregistry.v20171001.StorageAccountPropertiesResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}