import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualNetworkGatewayConnection(args: GetVirtualNetworkGatewayConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayConnectionResult>;
export interface GetVirtualNetworkGatewayConnectionArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual network gateway connection.
     */
    readonly virtualNetworkGatewayConnectionName: string;
}
/**
 * A common class for general resource information
 */
export interface GetVirtualNetworkGatewayConnectionResult {
    /**
     * The authorizationKey.
     */
    readonly authorizationKey?: string;
    /**
     * Virtual network Gateway connection status
     */
    readonly connectionStatus?: string;
    /**
     * Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
     */
    readonly connectionType?: string;
    /**
     * The Egress Bytes Transferred in this connection
     */
    readonly egressBytesTransferred?: number;
    /**
     * EnableBgp Flag
     */
    readonly enableBgp?: boolean;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: string;
    /**
     * The Ingress Bytes Transferred in this connection
     */
    readonly ingressBytesTransferred?: number;
    /**
     * A common class for general resource information
     */
    readonly localNetworkGateway2?: outputs.network.v20160330.LocalNetworkGatewayResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The reference to peerings resource.
     */
    readonly peer?: outputs.network.v20160330.SubResourceResponse;
    /**
     * Gets or sets Provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets resource GUID property of the VirtualNetworkGatewayConnection resource
     */
    readonly resourceGuid?: string;
    /**
     * The Routing weight.
     */
    readonly routingWeight?: number;
    /**
     * The IPsec share key.
     */
    readonly sharedKey?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A common class for general resource information
     */
    readonly virtualNetworkGateway1?: outputs.network.v20160330.VirtualNetworkGatewayResponse;
    /**
     * A common class for general resource information
     */
    readonly virtualNetworkGateway2?: outputs.network.v20160330.VirtualNetworkGatewayResponse;
}