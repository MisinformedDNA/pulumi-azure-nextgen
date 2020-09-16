import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPublicIPAddress(args: GetPublicIPAddressArgs, opts?: pulumi.InvokeOptions): Promise<GetPublicIPAddressResult>;
export interface GetPublicIPAddressArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the subnet.
     */
    readonly publicIpAddressName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Public IP address resource.
 */
export interface GetPublicIPAddressResult {
    /**
     * The FQDN of the DNS record associated with the public IP address.
     */
    readonly dnsSettings?: outputs.network.v20160901.PublicIPAddressDnsSettingsResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * The idle timeout of the public IP address.
     */
    readonly idleTimeoutInMinutes?: number;
    readonly ipAddress?: string;
    /**
     * IPConfiguration
     */
    readonly ipConfiguration: outputs.network.v20160901.IPConfigurationResponse;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
     */
    readonly publicIPAddressVersion?: string;
    /**
     * The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
     */
    readonly publicIPAllocationMethod?: string;
    /**
     * The resource GUID property of the public IP resource.
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