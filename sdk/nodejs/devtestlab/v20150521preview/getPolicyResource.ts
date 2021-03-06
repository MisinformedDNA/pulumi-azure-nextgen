// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getPolicyResource(args: GetPolicyResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResourceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:devtestlab/v20150521preview:getPolicyResource", {
        "labName": args.labName,
        "name": args.name,
        "policySetName": args.policySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyResourceArgs {
    /**
     * The name of the lab.
     */
    readonly labName: string;
    /**
     * The name of the policy.
     */
    readonly name: string;
    /**
     * The name of the policy set.
     */
    readonly policySetName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * A Policy.
 */
export interface GetPolicyResourceResult {
    /**
     * The description of the policy.
     */
    readonly description?: string;
    /**
     * The evaluator type of the policy.
     */
    readonly evaluatorType?: string;
    /**
     * The fact data of the policy.
     */
    readonly factData?: string;
    /**
     * The fact name of the policy.
     */
    readonly factName?: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name?: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The status of the policy.
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The threshold of the policy.
     */
    readonly threshold?: string;
    /**
     * The type of the resource.
     */
    readonly type?: string;
}
