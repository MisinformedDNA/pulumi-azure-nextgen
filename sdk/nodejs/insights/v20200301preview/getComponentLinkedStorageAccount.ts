// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getComponentLinkedStorageAccount(args: GetComponentLinkedStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetComponentLinkedStorageAccountResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20200301preview:getComponentLinkedStorageAccount", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "storageType": args.storageType,
    }, opts);
}

export interface GetComponentLinkedStorageAccountArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: string;
    /**
     * The type of the Application Insights component data source for the linked storage account.
     */
    readonly storageType: string;
}

/**
 * An Application Insights component linked storage accounts
 */
export interface GetComponentLinkedStorageAccountResult {
    /**
     * Linked storage account resource ID
     */
    readonly linkedStorageAccount?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
