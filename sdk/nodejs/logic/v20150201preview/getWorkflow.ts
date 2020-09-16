// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getWorkflow(args: GetWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:logic/v20150201preview:getWorkflow", {
        "resourceGroupName": args.resourceGroupName,
        "workflowName": args.workflowName,
    }, opts);
}

export interface GetWorkflowArgs {
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The workflow name.
     */
    readonly workflowName: string;
}

export interface GetWorkflowResult {
    /**
     * Gets the access endpoint.
     */
    readonly accessEndpoint: string;
    /**
     * Gets the changed time.
     */
    readonly changedTime: string;
    /**
     * Gets the created time.
     */
    readonly createdTime: string;
    /**
     * Gets or sets the definition.
     */
    readonly definition?: {[key: string]: any};
    /**
     * Gets or sets the link to definition.
     */
    readonly definitionLink?: outputs.logic.v20150201preview.ContentLinkResponse;
    /**
     * Gets or sets the resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name?: string;
    /**
     * Gets or sets the parameters.
     */
    readonly parameters?: {[key: string]: outputs.logic.v20150201preview.WorkflowParameterResponse};
    /**
     * Gets or sets the link to parameters.
     */
    readonly parametersLink?: outputs.logic.v20150201preview.ContentLinkResponse;
    /**
     * Gets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the sku.
     */
    readonly sku?: outputs.logic.v20150201preview.SkuResponse;
    /**
     * Gets or sets the state.
     */
    readonly state?: string;
    /**
     * Gets or sets the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets the resource type.
     */
    readonly type?: string;
    /**
     * Gets the version.
     */
    readonly version: string;
}