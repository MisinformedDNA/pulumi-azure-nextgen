import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Virtual Network resource.
 */
export declare class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetwork;
    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetwork;
    /**
     * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    readonly addressSpace: pulumi.Output<outputs.network.v20190401.AddressSpaceResponse | undefined>;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    readonly ddosProtectionPlan: pulumi.Output<outputs.network.v20190401.SubResourceResponse | undefined>;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    readonly dhcpOptions: pulumi.Output<outputs.network.v20190401.DhcpOptionsResponse | undefined>;
    /**
     * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    readonly enableDdosProtection: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    readonly enableVmProtection: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The resourceGuid property of the Virtual Network resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * A list of subnets in a Virtual Network.
     */
    readonly subnets: pulumi.Output<outputs.network.v20190401.SubnetResponse[] | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A list of peerings in a Virtual Network.
     */
    readonly virtualNetworkPeerings: pulumi.Output<outputs.network.v20190401.VirtualNetworkPeeringResponse[] | undefined>;
    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
     */
    readonly addressSpace?: pulumi.Input<inputs.network.v20190401.AddressSpace>;
    /**
     * The DDoS protection plan associated with the virtual network.
     */
    readonly ddosProtectionPlan?: pulumi.Input<inputs.network.v20190401.SubResource>;
    /**
     * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
     */
    readonly dhcpOptions?: pulumi.Input<inputs.network.v20190401.DhcpOptions>;
    /**
     * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
     */
    readonly enableDdosProtection?: pulumi.Input<boolean>;
    /**
     * Indicates if VM protection is enabled for all the subnets in the virtual network.
     */
    readonly enableVmProtection?: pulumi.Input<boolean>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resourceGuid property of the Virtual Network resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * A list of subnets in a Virtual Network.
     */
    readonly subnets?: pulumi.Input<pulumi.Input<inputs.network.v20190401.Subnet>[]>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: pulumi.Input<string>;
    /**
     * A list of peerings in a Virtual Network.
     */
    readonly virtualNetworkPeerings?: pulumi.Input<pulumi.Input<inputs.network.v20190401.VirtualNetworkPeering>[]>;
}