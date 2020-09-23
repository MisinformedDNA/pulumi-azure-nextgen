// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getCommunicationService(args: GetCommunicationServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetCommunicationServiceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:communication/v20200820preview:getCommunicationService", {
        "communicationServiceName": args.communicationServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunicationServiceArgs {
    /**
     * The name of the CommunicationService resource.
     */
    readonly communicationServiceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
}

/**
 * A class representing a CommunicationService resource.
 */
export interface GetCommunicationServiceResult {
    /**
     * The location where the communication service stores its data at rest.
     */
    readonly dataLocation: string;
    /**
     * FQDN of the CommunicationService instance.
     */
    readonly hostName: string;
    /**
     * The immutable resource Id of the communication service.
     */
    readonly immutableResourceId: string;
    /**
     * The Azure location where the CommunicationService is running.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Resource ID of an Azure Notification Hub linked to this resource.
     */
    readonly notificationHubId: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the service - e.g. "Microsoft.Communication/CommunicationServices"
     */
    readonly type: string;
    /**
     * Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version: string;
}