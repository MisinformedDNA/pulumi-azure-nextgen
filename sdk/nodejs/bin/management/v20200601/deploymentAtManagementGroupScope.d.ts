import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Deployment information.
 */
export declare class DeploymentAtManagementGroupScope extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentAtManagementGroupScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentAtManagementGroupScope;
    /**
     * Returns true if the given object is an instance of DeploymentAtManagementGroupScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DeploymentAtManagementGroupScope;
    /**
     * the location of the deployment.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the deployment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Deployment properties.
     */
    readonly properties: pulumi.Output<outputs.management.v20200601.DeploymentPropertiesExtendedResponse>;
    /**
     * Deployment tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the deployment.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DeploymentAtManagementGroupScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentAtManagementGroupScopeArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a DeploymentAtManagementGroupScope resource.
 */
export interface DeploymentAtManagementGroupScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: pulumi.Input<string>;
    /**
     * The management group ID.
     */
    readonly groupId: pulumi.Input<string>;
    /**
     * The location to store the deployment data.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The deployment properties.
     */
    readonly properties: pulumi.Input<inputs.management.v20200601.DeploymentProperties>;
    /**
     * Deployment tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}