import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSubnet(args: GetSubnetArgs, opts?: pulumi.InvokeOptions): Promise<GetSubnetResult>;
export interface GetSubnetArgs {
    /**
     * Expands referenced resources.
     */
    readonly expand?: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the subnet.
     */
    readonly subnetName: string;
    /**
     * The name of the virtual network.
     */
    readonly virtualNetworkName: string;
}
/**
 * Subnet in a virtual network resource.
 */
export interface GetSubnetResult {
    /**
     * The address prefix for the subnet.
     */
    readonly addressPrefix?: string;
    /**
     * List of  address prefixes for the subnet.
     */
    readonly addressPrefixes?: string[];
    /**
     * Gets an array of references to the delegations on the subnet.
     */
    readonly delegations?: outputs.network.v20181201.DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * An array of references to interface endpoints
     */
    readonly interfaceEndpoints: outputs.network.v20181201.InterfaceEndpointResponse[];
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: outputs.network.v20181201.IPConfigurationProfileResponse[];
    /**
     * Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: outputs.network.v20181201.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: outputs.network.v20181201.NetworkSecurityGroupResponse;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     */
    readonly purpose: string;
    /**
     * Gets an array of references to the external resources using subnet.
     */
    readonly resourceNavigationLinks?: outputs.network.v20181201.ResourceNavigationLinkResponse[];
    /**
     * The reference of the RouteTable resource.
     */
    readonly routeTable?: outputs.network.v20181201.RouteTableResponse;
    /**
     * Gets an array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks?: outputs.network.v20181201.ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: outputs.network.v20181201.ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: outputs.network.v20181201.ServiceEndpointPropertiesFormatResponse[];
}