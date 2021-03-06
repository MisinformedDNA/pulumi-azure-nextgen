// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function listAccountKeys(args: ListAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListAccountKeysResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:engagementfabric/v20180901preview:listAccountKeys", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListAccountKeysArgs {
    /**
     * Account Name
     */
    readonly accountName: string;
    /**
     * Resource Group Name
     */
    readonly resourceGroupName: string;
}

/**
 * The list of the EngagementFabric account keys
 */
export interface ListAccountKeysResult {
    /**
     * Account keys
     */
    readonly value: outputs.engagementfabric.v20180901preview.KeyDescriptionResponse[];
}
