import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * PublicIPAddress resource
 */
export declare class PublicIPAddress extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPAddress;
    /**
     * Returns true if the given object is an instance of PublicIPAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicIPAddress;
    /**
     * Gets or sets FQDN of the DNS record associated with the public IP address
     */
    readonly dnsSettings: pulumi.Output<outputs.network.v20160601.PublicIPAddressDnsSettingsResponse | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the idle timeout of the public IP address
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    readonly ipAddress: pulumi.Output<string | undefined>;
    /**
     * IPConfiguration
     */
    readonly ipConfiguration: pulumi.Output<outputs.network.v20160601.IPConfigurationResponse>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets PublicIP address version (IPv4/IPv6)
     */
    readonly publicIPAddressVersion: pulumi.Output<string | undefined>;
    /**
     * Gets or sets PublicIP allocation method (Static/Dynamic)
     */
    readonly publicIPAllocationMethod: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource guid property of the PublicIP resource
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PublicIPAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPAddressArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PublicIPAddress resource.
 */
export interface PublicIPAddressArgs {
    /**
     * Gets or sets FQDN of the DNS record associated with the public IP address
     */
    readonly dnsSettings?: pulumi.Input<inputs.network.v20160601.PublicIPAddressDnsSettings>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets or sets the idle timeout of the public IP address
     */
    readonly idleTimeoutInMinutes?: pulumi.Input<number>;
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * Gets or sets PublicIP address version (IPv4/IPv6)
     */
    readonly publicIPAddressVersion?: pulumi.Input<string>;
    /**
     * Gets or sets PublicIP allocation method (Static/Dynamic)
     */
    readonly publicIPAllocationMethod?: pulumi.Input<string>;
    /**
     * The name of the publicIpAddress.
     */
    readonly publicIpAddressName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource guid property of the PublicIP resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}