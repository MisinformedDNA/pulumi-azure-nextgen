import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The policy set definition.
 */
export declare class PolicySetDefinitionAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PolicySetDefinitionAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicySetDefinitionAtManagementGroup;
    /**
     * Returns true if the given object is an instance of PolicySetDefinitionAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PolicySetDefinitionAtManagementGroup;
    /**
     * The policy set definition description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The policy set definition metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The name of the policy set definition.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: pulumi.Output<outputs.management.v20180301.PolicyDefinitionReferenceResponse[]>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType: pulumi.Output<string | undefined>;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a PolicySetDefinitionAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicySetDefinitionAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PolicySetDefinitionAtManagementGroup resource.
 */
export interface PolicySetDefinitionAtManagementGroupArgs {
    /**
     * The policy set definition description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * The ID of the management group.
     */
    readonly managementGroupId: pulumi.Input<string>;
    /**
     * The policy set definition metadata.
     */
    readonly metadata?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: pulumi.Input<pulumi.Input<inputs.management.v20180301.PolicyDefinitionReference>[]>;
    /**
     * The name of the policy set definition to create.
     */
    readonly policySetDefinitionName: pulumi.Input<string>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: pulumi.Input<string>;
}