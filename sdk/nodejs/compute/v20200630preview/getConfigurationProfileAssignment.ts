// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getConfigurationProfileAssignment(args: GetConfigurationProfileAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileAssignmentResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:compute/v20200630preview:getConfigurationProfileAssignment", {
        "configurationProfileAssignmentName": args.configurationProfileAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetConfigurationProfileAssignmentArgs {
    /**
     * The configuration profile assignment name.
     */
    readonly configurationProfileAssignmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    readonly vmName: string;
}

/**
 * Configuration profile assignment is an association between a VM and automanage profile configuration.
 */
export interface GetConfigurationProfileAssignmentResult {
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the configuration profile assignment.
     */
    readonly properties: outputs.compute.v20200630preview.ConfigurationProfileAssignmentPropertiesResponse;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
