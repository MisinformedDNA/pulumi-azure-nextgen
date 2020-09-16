import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualNetworkTap(args: GetVirtualNetworkTapArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkTapResult>;
export interface GetVirtualNetworkTapArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of virtual network tap.
     */
    readonly tapName: string;
}
/**
 * Virtual Network Tap resource.
 */
export interface GetVirtualNetworkTapResult {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    readonly destinationLoadBalancerFrontEndIPConfiguration?: outputs.network.v20190901.FrontendIPConfigurationResponse;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    readonly destinationNetworkInterfaceIPConfiguration?: outputs.network.v20190901.NetworkInterfaceIPConfigurationResponse;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    readonly destinationPort?: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    readonly networkInterfaceTapConfigurations: outputs.network.v20190901.NetworkInterfaceTapConfigurationResponse[];
    /**
     * The provisioning state of the virtual network tap resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the virtual network tap resource.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}