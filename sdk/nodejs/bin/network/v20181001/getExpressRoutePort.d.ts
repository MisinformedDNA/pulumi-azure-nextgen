import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getExpressRoutePort(args: GetExpressRoutePortArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRoutePortResult>;
export interface GetExpressRoutePortArgs {
    /**
     * The name of ExpressRoutePort.
     */
    readonly expressRoutePortName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * ExpressRoutePort resource definition.
 */
export interface GetExpressRoutePortResult {
    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     */
    readonly allocationDate: string;
    /**
     * Bandwidth of procured ports in Gbps
     */
    readonly bandwidthInGbps?: number;
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     */
    readonly circuits: outputs.network.v20181001.SubResourceResponse[];
    /**
     * Encapsulation method on physical ports.
     */
    readonly encapsulation?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Ether type of the physical port.
     */
    readonly etherType: string;
    /**
     * The set of physical links of the ExpressRoutePort resource
     */
    readonly links?: outputs.network.v20181001.ExpressRouteLinkResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Maximum transmission unit of the physical port pair(s)
     */
    readonly mtu: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The name of the peering location that the ExpressRoutePort is mapped to physically.
     */
    readonly peeringLocation?: string;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     */
    readonly provisionedBandwidthInGbps: number;
    /**
     * The provisioning state of the ExpressRoutePort resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the ExpressRoutePort resource.
     */
    readonly resourceGuid?: string;
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