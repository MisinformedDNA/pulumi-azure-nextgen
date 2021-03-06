// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getManagedInstanceAdministrator(args: GetManagedInstanceAdministratorArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceAdministratorResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:sql/v20170301preview:getManagedInstanceAdministrator", {
        "administratorName": args.administratorName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceAdministratorArgs {
    /**
     * The administrator name.
     */
    readonly administratorName: string;
    /**
     * The name of the managed instance.
     */
    readonly managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
}

/**
 * An Azure SQL managed instance administrator.
 */
export interface GetManagedInstanceAdministratorResult {
    /**
     * Type of the managed instance administrator.
     */
    readonly administratorType: string;
    /**
     * Login name of the managed instance administrator.
     */
    readonly login: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * SID (object ID) of the managed instance administrator.
     */
    readonly sid: string;
    /**
     * Tenant ID of the managed instance administrator.
     */
    readonly tenantId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
