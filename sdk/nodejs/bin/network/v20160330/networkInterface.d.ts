import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A NetworkInterface in a resource group
 */
export declare class NetworkInterface extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterface;
    /**
     * Returns true if the given object is an instance of NetworkInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkInterface;
    /**
     * Gets or sets DNS Settings in  NetworkInterface
     */
    readonly dnsSettings: pulumi.Output<outputs.network.v20160330.NetworkInterfaceDnsSettingsResponse | undefined>;
    /**
     * Gets or sets whether IPForwarding is enabled on the NIC
     */
    readonly enableIPForwarding: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets list of IPConfigurations of the NetworkInterface
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20160330.NetworkInterfaceIPConfigurationResponse[] | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets the MAC Address of the network interface
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup: pulumi.Output<outputs.network.v20160330.NetworkSecurityGroupResponse | undefined>;
    /**
     * Gets whether this is a primary NIC on a virtual machine
     */
    readonly primary: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets resource GUID property of the network interface resource
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
     * Gets or sets the reference of a VirtualMachine
     */
    readonly virtualMachine: pulumi.Output<outputs.network.v20160330.SubResourceResponse | undefined>;
    /**
     * Create a NetworkInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * Gets or sets DNS Settings in  NetworkInterface
     */
    readonly dnsSettings?: pulumi.Input<inputs.network.v20160330.NetworkInterfaceDnsSettings>;
    /**
     * Gets or sets whether IPForwarding is enabled on the NIC
     */
    readonly enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets or sets list of IPConfigurations of the NetworkInterface
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20160330.NetworkInterfaceIPConfiguration>[]>;
    /**
     * Resource location
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets the MAC Address of the network interface
     */
    readonly macAddress?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    readonly networkInterfaceName: pulumi.Input<string>;
    /**
     * Gets or sets the reference of the NetworkSecurityGroup resource
     */
    readonly networkSecurityGroup?: pulumi.Input<inputs.network.v20160330.NetworkSecurityGroup>;
    /**
     * Gets whether this is a primary NIC on a virtual machine
     */
    readonly primary?: pulumi.Input<boolean>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets resource GUID property of the network interface resource
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Gets or sets the reference of a VirtualMachine
     */
    readonly virtualMachine?: pulumi.Input<inputs.network.v20160330.SubResource>;
}