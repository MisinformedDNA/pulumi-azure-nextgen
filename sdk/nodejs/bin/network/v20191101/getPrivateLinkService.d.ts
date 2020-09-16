import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPrivateLinkService(args: GetPrivateLinkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServiceResult>;
export interface GetPrivateLinkServiceArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the private link service.
     */
    readonly serviceName: string;
}
/**
 * Private link service resource.
 */
export interface GetPrivateLinkServiceResult {
    /**
     * The alias of the private link service.
     */
    readonly alias: string;
    /**
     * The auto-approval list of the private link service.
     */
    readonly autoApproval?: outputs.network.v20191101.PrivateLinkServicePropertiesResponseAutoApproval;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    readonly enableProxyProtocol?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The list of Fqdn.
     */
    readonly fqdns?: string[];
    /**
     * An array of private link service IP configurations.
     */
    readonly ipConfigurations?: outputs.network.v20191101.PrivateLinkServiceIpConfigurationResponse[];
    /**
     * An array of references to the load balancer IP configurations.
     */
    readonly loadBalancerFrontendIpConfigurations?: outputs.network.v20191101.FrontendIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    readonly networkInterfaces: outputs.network.v20191101.NetworkInterfaceResponse[];
    /**
     * An array of list about connections to the private endpoint.
     */
    readonly privateEndpointConnections: outputs.network.v20191101.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the private link service resource.
     */
    readonly provisioningState: string;
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
    /**
     * The visibility list of the private link service.
     */
    readonly visibility?: outputs.network.v20191101.PrivateLinkServicePropertiesResponseVisibility;
}