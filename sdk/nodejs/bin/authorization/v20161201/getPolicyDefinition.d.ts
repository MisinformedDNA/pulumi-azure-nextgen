import * as pulumi from "@pulumi/pulumi";
export declare function getPolicyDefinition(args: GetPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyDefinitionResult>;
export interface GetPolicyDefinitionArgs {
    /**
     * The name of the policy definition to get.
     */
    readonly policyDefinitionName: string;
}
/**
 * The policy definition.
 */
export interface GetPolicyDefinitionResult {
    /**
     * The policy definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy definition.
     */
    readonly displayName?: string;
    /**
     * The policy definition metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * The policy definition mode. Possible values are NotSpecified, Indexed, and All.
     */
    readonly mode?: string;
    /**
     * The name of the policy definition.
     */
    readonly name: string;
    /**
     * Required if a parameter is used in policy rule.
     */
    readonly parameters?: {
        [key: string]: any;
    };
    /**
     * The policy rule.
     */
    readonly policyRule?: {
        [key: string]: any;
    };
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
     */
    readonly policyType?: string;
}