import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Class representing a Traffic Manager endpoint.
 */
export declare class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Endpoint;
    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Endpoint;
    /**
     * List of custom headers.
     */
    readonly customHeaders: pulumi.Output<outputs.network.v20180401.EndpointPropertiesResponseCustomHeaders[] | undefined>;
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    readonly endpointLocation: pulumi.Output<string | undefined>;
    /**
     * The monitoring status of the endpoint.
     */
    readonly endpointMonitorStatus: pulumi.Output<string | undefined>;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    readonly endpointStatus: pulumi.Output<string | undefined>;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    readonly geoMapping: pulumi.Output<string[] | undefined>;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    readonly minChildEndpoints: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    readonly subnets: pulumi.Output<outputs.network.v20180401.EndpointPropertiesResponseSubnets[] | undefined>;
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    readonly target: pulumi.Output<string | undefined>;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    readonly targetResourceId: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    readonly weight: pulumi.Output<number | undefined>;
    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * List of custom headers.
     */
    readonly customHeaders?: pulumi.Input<pulumi.Input<inputs.network.v20180401.EndpointPropertiesCustomHeaders>[]>;
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    readonly endpointLocation?: pulumi.Input<string>;
    /**
     * The monitoring status of the endpoint.
     */
    readonly endpointMonitorStatus?: pulumi.Input<string>;
    /**
     * The name of the Traffic Manager endpoint to be created or updated.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    readonly endpointStatus?: pulumi.Input<string>;
    /**
     * The type of the Traffic Manager endpoint to be created or updated.
     */
    readonly endpointType: pulumi.Input<string>;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    readonly geoMapping?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    readonly minChildEndpoints?: pulumi.Input<number>;
    /**
     * The name of the resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The name of the Traffic Manager profile.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Traffic Manager endpoint to be created or updated.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    readonly subnets?: pulumi.Input<pulumi.Input<inputs.network.v20180401.EndpointPropertiesSubnets>[]>;
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    readonly target?: pulumi.Input<string>;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    readonly targetResourceId?: pulumi.Input<string>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    readonly weight?: pulumi.Input<number>;
}