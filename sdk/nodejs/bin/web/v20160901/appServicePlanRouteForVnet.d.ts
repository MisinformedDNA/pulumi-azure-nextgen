import * as pulumi from "@pulumi/pulumi";
/**
 * Virtual Network route contract used to pass routing information for a Virtual Network.
 */
export declare class AppServicePlanRouteForVnet extends pulumi.CustomResource {
    /**
     * Get an existing AppServicePlanRouteForVnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppServicePlanRouteForVnet;
    /**
     * Returns true if the given object is an instance of AppServicePlanRouteForVnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AppServicePlanRouteForVnet;
    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    readonly endAddress: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type of route this is:
     * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
     * INHERITED - Routes inherited from the real Virtual Network routes
     * STATIC - Static route set on the app only
     *
     * These values will be used for syncing an app's routes with those from a Virtual Network.
     */
    readonly routeType: pulumi.Output<string | undefined>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    readonly startAddress: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The name of this route. This is only returned by the server and does not need to be set by the client.
     */
    readonly vnetRouteName: pulumi.Output<string | undefined>;
    /**
     * Create a AppServicePlanRouteForVnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppServicePlanRouteForVnetArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AppServicePlanRouteForVnet resource.
 */
export interface AppServicePlanRouteForVnetArgs {
    /**
     * The ending address for this route. If the start address is specified in CIDR notation, this must be omitted.
     */
    readonly endAddress?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Name of the App Service plan.
     */
    readonly name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Virtual Network route.
     */
    readonly routeName: pulumi.Input<string>;
    /**
     * The type of route this is:
     * DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918
     * INHERITED - Routes inherited from the real Virtual Network routes
     * STATIC - Static route set on the app only
     *
     * These values will be used for syncing an app's routes with those from a Virtual Network.
     */
    readonly routeType?: pulumi.Input<string>;
    /**
     * The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified.
     */
    readonly startAddress?: pulumi.Input<string>;
    /**
     * Name of the Virtual Network.
     */
    readonly vnetName: pulumi.Input<string>;
    /**
     * The name of this route. This is only returned by the server and does not need to be set by the client.
     */
    readonly vnetRouteName?: pulumi.Input<string>;
}