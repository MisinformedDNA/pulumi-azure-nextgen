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
     * List of address prefixes for the subnet.
     */
    readonly addressPrefixes?: string[];
    /**
     * Gets an array of references to the delegations on the subnet.
     */
    readonly delegations?: outputs.network.v20190401.DelegationResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Array of IP configuration profiles which reference this subnet.
     */
    readonly ipConfigurationProfiles: outputs.network.v20190401.IPConfigurationProfileResponse[];
    /**
     * Gets an array of references to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations: outputs.network.v20190401.IPConfigurationResponse[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * Nat gateway associated with this subnet.
     */
    readonly natGateway?: outputs.network.v20190401.SubResourceResponse;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    readonly networkSecurityGroup?: outputs.network.v20190401.NetworkSecurityGroupResponse;
    /**
     * Enable or Disable private end point on the subnet.
     */
    readonly privateEndpointNetworkPolicies?: string;
    /**
     * An array of references to private endpoints.
     */
    readonly privateEndpoints: outputs.network.v20190401.PrivateEndpointResponse[];
    /**
     * Enable or Disable private link service on the subnet.
     */
    readonly privateLinkServiceNetworkPolicies?: string;
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
    readonly resourceNavigationLinks?: outputs.network.v20190401.ResourceNavigationLinkResponse[];
    /**
     * The reference of the RouteTable resource.
     */
    readonly routeTable?: outputs.network.v20190401.RouteTableResponse;
    /**
     * Gets an array of references to services injecting into this subnet.
     */
    readonly serviceAssociationLinks?: outputs.network.v20190401.ServiceAssociationLinkResponse[];
    /**
     * An array of service endpoint policies.
     */
    readonly serviceEndpointPolicies?: outputs.network.v20190401.ServiceEndpointPolicyResponse[];
    /**
     * An array of service endpoints.
     */
    readonly serviceEndpoints?: outputs.network.v20190401.ServiceEndpointPropertiesFormatResponse[];
}