// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getExpressRouteConnection(args: GetExpressRouteConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetExpressRouteConnectionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:network/v20200401:getExpressRouteConnection", {
        "connectionName": args.connectionName,
        "expressRouteGatewayName": args.expressRouteGatewayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExpressRouteConnectionArgs {
    /**
     * The name of the ExpressRoute connection.
     */
    readonly connectionName: string;
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * ExpressRouteConnection resource.
 */
export interface GetExpressRouteConnectionResult {
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey?: string;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: outputs.network.v20200401.ExpressRouteCircuitPeeringIdResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the express route connection resource.
     */
    readonly provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: outputs.network.v20200401.RoutingConfigurationResponse;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight?: number;
}