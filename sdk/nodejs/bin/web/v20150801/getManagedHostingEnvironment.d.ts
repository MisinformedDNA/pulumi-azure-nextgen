import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getManagedHostingEnvironment(args: GetManagedHostingEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedHostingEnvironmentResult>;
export interface GetManagedHostingEnvironmentArgs {
    /**
     * Name of managed hosting environment
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a managed hosting environment
 */
export interface GetManagedHostingEnvironmentResult {
    /**
     * Resource id of the api management account associated with this managed hosting environment (read only)
     */
    readonly apiManagementAccount?: string;
    /**
     * DNS suffix of the managed hosting environment
     */
    readonly dnsSuffix?: string;
    /**
     * True/false indicating whether the managed hosting environment is healthy
     */
    readonly environmentIsHealthy?: boolean;
    /**
     * Detailed message about with results of the last check of the managed hosting environment
     */
    readonly environmentStatus?: string;
    /**
     * Number of ip ssl addresses reserved for the managed hosting environment
     */
    readonly ipsslAddressCount?: number;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Resource group of the managed hosting environment (read only)
     */
    readonly resourceGroup?: string;
    /**
     * Current status of the managed hosting environment
     */
    readonly status: string;
    /**
     * Subscription of the managed hosting environment (read only)
     */
    readonly subscriptionId?: string;
    /**
     * True/false indicating whether the managed hosting environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
     *             (most likely because NSG blocked the incoming traffic)
     */
    readonly suspended?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
    /**
     * Description of the managed hosting environment's virtual network
     */
    readonly virtualNetwork?: outputs.web.v20150801.VirtualNetworkProfileResponse;
}