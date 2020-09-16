import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getProfile(args: GetProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileResult>;
export interface GetProfileArgs {
    /**
     * The name of the Traffic Manager profile.
     */
    readonly profileName: string;
    /**
     * The name of the resource group containing the Traffic Manager profile.
     */
    readonly resourceGroupName: string;
}
/**
 * Class representing a Traffic Manager profile.
 */
export interface GetProfileResult {
    /**
     * The DNS settings of the Traffic Manager profile.
     */
    readonly dnsConfig?: outputs.network.v20170501.DnsConfigResponse;
    /**
     * The list of endpoints in the Traffic Manager profile.
     */
    readonly endpoints?: outputs.network.v20170501.EndpointResponse[];
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The endpoint monitoring settings of the Traffic Manager profile.
     */
    readonly monitorConfig?: outputs.network.v20170501.MonitorConfigResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the Traffic Manager profile.
     */
    readonly profileStatus?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The traffic routing method of the Traffic Manager profile.
     */
    readonly trafficRoutingMethod?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type: string;
}