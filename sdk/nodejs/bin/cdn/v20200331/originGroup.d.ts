import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 */
export declare class OriginGroup extends pulumi.CustomResource {
    /**
     * Get an existing OriginGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OriginGroup;
    /**
     * Returns true if the given object is an instance of OriginGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OriginGroup;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings: pulumi.Output<outputs.cdn.v20200331.HealthProbeParametersResponse | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    readonly origins: pulumi.Output<outputs.cdn.v20200331.ResourceReferenceResponse[]>;
    /**
     * Provisioning status of the origin group.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Resource status of the origin group.
     */
    readonly resourceState: pulumi.Output<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    readonly responseBasedOriginErrorDetectionSettings: pulumi.Output<outputs.cdn.v20200331.ResponseBasedOriginErrorDetectionParametersResponse | undefined>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a OriginGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a OriginGroup resource.
 */
export interface OriginGroupArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    readonly endpointName: pulumi.Input<string>;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    readonly healthProbeSettings?: pulumi.Input<inputs.cdn.v20200331.HealthProbeParameters>;
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    readonly originGroupName: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    readonly origins: pulumi.Input<pulumi.Input<inputs.cdn.v20200331.ResourceReference>[]>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    readonly profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    readonly responseBasedOriginErrorDetectionSettings?: pulumi.Input<inputs.cdn.v20200331.ResponseBasedOriginErrorDetectionParameters>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}