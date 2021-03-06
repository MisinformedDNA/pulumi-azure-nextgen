// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getBigDataPool(args: GetBigDataPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetBigDataPoolResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:synapse/v20190601preview:getBigDataPool", {
        "bigDataPoolName": args.bigDataPoolName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetBigDataPoolArgs {
    /**
     * Big Data pool name
     */
    readonly bigDataPoolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace
     */
    readonly workspaceName: string;
}

/**
 * A Big Data pool
 */
export interface GetBigDataPoolResult {
    /**
     * Auto-pausing properties
     */
    readonly autoPause?: outputs.synapse.v20190601preview.AutoPausePropertiesResponse;
    /**
     * Auto-scaling properties
     */
    readonly autoScale?: outputs.synapse.v20190601preview.AutoScalePropertiesResponse;
    /**
     * The time when the Big Data pool was created.
     */
    readonly creationDate?: string;
    /**
     * The default folder where Spark logs will be written.
     */
    readonly defaultSparkLogFolder?: string;
    /**
     * Whether compute isolation is required or not.
     */
    readonly isComputeIsolationEnabled?: boolean;
    /**
     * Library version requirements
     */
    readonly libraryRequirements?: outputs.synapse.v20190601preview.LibraryRequirementsResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The number of nodes in the Big Data pool.
     */
    readonly nodeCount?: number;
    /**
     * The level of compute power that each node in the Big Data pool has.
     */
    readonly nodeSize?: string;
    /**
     * The kind of nodes that the Big Data pool provides.
     */
    readonly nodeSizeFamily?: string;
    /**
     * The state of the Big Data pool.
     */
    readonly provisioningState?: string;
    /**
     * The Spark events folder
     */
    readonly sparkEventsFolder?: string;
    /**
     * The Apache Spark version.
     */
    readonly sparkVersion?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
