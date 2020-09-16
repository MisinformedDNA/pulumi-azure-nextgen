import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRemediationAtSubscription(args: GetRemediationAtSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetRemediationAtSubscriptionResult>;
export interface GetRemediationAtSubscriptionArgs {
    /**
     * The name of the remediation.
     */
    readonly remediationName: string;
}
/**
 * The remediation definition.
 */
export interface GetRemediationAtSubscriptionResult {
    /**
     * The time at which the remediation was created.
     */
    readonly createdOn: string;
    /**
     * The deployment status summary for all deployments created by the remediation.
     */
    readonly deploymentStatus: outputs.policyinsights.v20190701.RemediationDeploymentSummaryResponse;
    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    readonly filters?: outputs.policyinsights.v20190701.RemediationFiltersResponse;
    /**
     * The time at which the remediation was last updated.
     */
    readonly lastUpdatedOn: string;
    /**
     * The name of the remediation.
     */
    readonly name: string;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    readonly policyAssignmentId?: string;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId?: string;
    /**
     * The status of the remediation.
     */
    readonly provisioningState: string;
    /**
     * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
     */
    readonly resourceDiscoveryMode?: string;
    /**
     * The type of the remediation.
     */
    readonly type: string;
}