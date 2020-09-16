// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:servicefabricmesh/v20180701preview:getVolume", {
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * Azure resource group name
     */
    readonly resourceGroupName: string;
    /**
     * The identity of the volume.
     */
    readonly volumeName: string;
}

/**
 * This type describes a volume resource.
 */
export interface GetVolumeResult {
    /**
     * This type describes a volume provided by an Azure Files file share.
     */
    readonly azureFileParameters?: outputs.servicefabricmesh.v20180701preview.VolumeProviderParametersAzureFileResponse;
    /**
     * User readable description of the volume.
     */
    readonly description?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provider of the volume.
     */
    readonly provider: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}