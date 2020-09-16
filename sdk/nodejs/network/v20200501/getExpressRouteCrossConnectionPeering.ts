// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getExpressRouteCrossConnectionPeering(args: GetExpressRouteCrossConnectionPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteCrossConnectionPeeringResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200501:getExpressRouteCrossConnectionPeering", {
        "crossConnectionName": args.crossConnectionName,
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteCrossConnectionPeeringArgs {
    /**
     * The name of the ExpressRouteCrossConnection.
     */
    readonly crossConnectionName: string;
    /**
     * The name of the peering.
     */
    readonly peeringName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * Peering in an ExpressRoute Cross Connection resource.
 */
export interface GetExpressRouteCrossConnectionPeeringResult {
    /**
     * The Azure ASN.
     */
    readonly azureASN: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: string;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig?: outputs.network.v20200501.Ipv6ExpressRouteCircuitPeeringConfigResponse;
    /**
     * Who was the last to modify the peering.
     */
    readonly lastModifiedBy: string;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: outputs.network.v20200501.ExpressRouteCircuitPeeringConfigResponse;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The peer ASN.
     */
    readonly peerASN?: number;
    /**
     * The peering type.
     */
    readonly peeringType?: string;
    /**
     * The primary port.
     */
    readonly primaryAzurePort: string;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: string;
    /**
     * The provisioning state of the express route cross connection peering resource.
     */
    readonly provisioningState: string;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort: string;
    /**
     * The secondary address prefix.
     */
    readonly secondaryPeerAddressPrefix?: string;
    /**
     * The shared key.
     */
    readonly sharedKey?: string;
    /**
     * The peering state.
     */
    readonly state?: string;
    /**
     * The VLAN ID.
     */
    readonly vlanId?: number;
}