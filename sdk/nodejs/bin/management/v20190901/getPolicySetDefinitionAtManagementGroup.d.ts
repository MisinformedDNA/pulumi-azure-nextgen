import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getPolicySetDefinitionAtManagementGroup(args: GetPolicySetDefinitionAtManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionAtManagementGroupResult>;
export interface GetPolicySetDefinitionAtManagementGroupArgs {
    /**
     * The ID of the management group.
     */
    readonly managementGroupId: string;
    /**
     * The name of the policy set definition to get.
     */
    readonly policySetDefinitionName: string;
}
/**
 * The policy set definition.
 */
export interface GetPolicySetDefinitionAtManagementGroupResult {
    /**
     * The policy set definition description.
     */
    readonly description?: string;
    /**
     * The display name of the policy set definition.
     */
    readonly displayName?: string;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * The name of the policy set definition.
     */
    readonly name: string;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    readonly parameters?: {
        [key: string]: outputs.management.v20190901.ParameterDefinitionsValueResponse;
    };
    /**
     * The metadata describing groups of policy definition references within the policy set definition.
     */
    readonly policyDefinitionGroups?: outputs.management.v20190901.PolicyDefinitionGroupResponse[];
    /**
     * An array of policy definition references.
     */
    readonly policyDefinitions: outputs.management.v20190901.PolicyDefinitionReferenceResponse[];
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    readonly policyType?: string;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    readonly type: string;
}