// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getNotebookProxy(args: GetNotebookProxyArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebookProxyResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:notebooks/v20191011preview:getNotebookProxy", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetNotebookProxyArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the resource.
     */
    readonly resourceName: string;
}

/**
 * A NotebookProxy resource.
 */
export interface GetNotebookProxyResult {
    /**
     * The friendly string identifier of the creator of the NotebookProxy resource.
     */
    readonly hostname?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The unique identifier (a GUID) generated for every resource.
     */
    readonly resourceId: string;
    /**
     * The type of the resource. Ex- Microsoft.Storage/storageAccounts or Microsoft.Notebooks/notebookProxies.
     */
    readonly type: string;
}