import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateEndpoint(args: GetPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointResult>;
export interface GetPrivateEndpointArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the private endpoint.
     */
    readonly privateEndpointName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Private endpoint resource.
 */
export interface GetPrivateEndpointResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    readonly manualPrivateLinkServiceConnections?: outputs.network.v20190701.PrivateLinkServiceConnectionResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     */
    readonly networkInterfaces: outputs.network.v20190701.NetworkInterfaceResponse[];
    /**
     * A grouping of information about the connection to the remote resource.
     */
    readonly privateLinkServiceConnections?: outputs.network.v20190701.PrivateLinkServiceConnectionResponse[];
    /**
     * The provisioning state of the private endpoint resource.
     */
    readonly provisioningState?: string;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet?: outputs.network.v20190701.SubnetResponse;
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