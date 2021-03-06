// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getIntegrationAccount(args: GetIntegrationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/latest:getIntegrationAccount", {
        "integrationAccountName": args.integrationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationAccountArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}

/**
 * The integration account.
 */
export interface GetIntegrationAccountResult {
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: outputs.logic.latest.IntegrationServiceEnvironmentResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The sku.
     */
    readonly sku?: outputs.logic.latest.IntegrationAccountSkuResponse;
    /**
     * The workflow state.
     */
    readonly state?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
