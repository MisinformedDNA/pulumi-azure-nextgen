import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A container for a managed identity to execute DevTest lab services.
 */
export declare class ServiceRunner extends pulumi.CustomResource {
    /**
     * Get an existing ServiceRunner resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServiceRunner;
    /**
     * Returns true if the given object is an instance of ServiceRunner.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServiceRunner;
    /**
     * The identity of the resource.
     */
    readonly identity: pulumi.Output<outputs.devtestlab.v20160515.IdentityPropertiesResponse | undefined>;
    /**
     * The location of the resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ServiceRunner resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceRunnerArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServiceRunner resource.
 */
export interface ServiceRunnerArgs {
    /**
     * The identity of the resource.
     */
    readonly identity?: pulumi.Input<inputs.devtestlab.v20160515.IdentityProperties>;
    /**
     * The name of the lab.
     */
    readonly labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the service runner.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}