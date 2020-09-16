import * as pulumi from "@pulumi/pulumi";
/**
 * Authorization in a ExpressRouteCircuit resource
 */
export declare class ExpressRouteCircuitAuthorization extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitAuthorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitAuthorization;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitAuthorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuitAuthorization;
    /**
     * Gets or sets the authorization key
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * Gets or sets AuthorizationUseStatus
     */
    readonly authorizationUseStatus: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Create a ExpressRouteCircuitAuthorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitAuthorizationArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteCircuitAuthorization resource.
 */
export interface ExpressRouteCircuitAuthorizationArgs {
    /**
     * Gets or sets the authorization key
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the authorization.
     */
    readonly authorizationName: pulumi.Input<string>;
    /**
     * Gets or sets AuthorizationUseStatus
     */
    readonly authorizationUseStatus?: pulumi.Input<string>;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}