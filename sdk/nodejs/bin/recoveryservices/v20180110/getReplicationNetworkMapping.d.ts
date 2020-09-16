import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getReplicationNetworkMapping(args: GetReplicationNetworkMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationNetworkMappingResult>;
export interface GetReplicationNetworkMappingArgs {
    /**
     * Primary fabric name.
     */
    readonly fabricName: string;
    /**
     * Network mapping name.
     */
    readonly networkMappingName: string;
    /**
     * Primary network name.
     */
    readonly networkName: string;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the recovery services vault.
     */
    readonly resourceName: string;
}
/**
 * Network Mapping model. Ideally it should have been possible to inherit this class from prev version in InheritedModels as long as there is no difference in structure or method signature. Since there were no base Models for certain fields and methods viz NetworkMappingProperties and Load with required return type, the class has been introduced in its entirety with references to base models to facilitate extensions in subsequent versions.
 */
export interface GetReplicationNetworkMappingResult {
    /**
     * Resource Location
     */
    readonly location?: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * The Network Mapping Properties.
     */
    readonly properties: outputs.recoveryservices.v20180110.NetworkMappingPropertiesResponse;
    /**
     * Resource Type
     */
    readonly type: string;
}