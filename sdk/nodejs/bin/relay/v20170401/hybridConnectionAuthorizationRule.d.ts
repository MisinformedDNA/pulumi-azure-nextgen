import * as pulumi from "@pulumi/pulumi";
/**
 * Description of a namespace authorization rule.
 */
export declare class HybridConnectionAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing HybridConnectionAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridConnectionAuthorizationRule;
    /**
     * Returns true if the given object is an instance of HybridConnectionAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridConnectionAuthorizationRule;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Output<string[]>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a HybridConnectionAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridConnectionAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a HybridConnectionAuthorizationRule resource.
 */
export interface HybridConnectionAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: pulumi.Input<string>;
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The rights associated with the rule.
     */
    readonly rights: pulumi.Input<pulumi.Input<string>[]>;
}