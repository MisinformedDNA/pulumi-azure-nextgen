// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getAndroidMAMPolicyByName(args: GetAndroidMAMPolicyByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetAndroidMAMPolicyByNameResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:intune/v20150114privatepreview:getAndroidMAMPolicyByName", {
        "hostName": args.hostName,
        "policyName": args.policyName,
        "select": args.select,
    }, opts);
}

export interface GetAndroidMAMPolicyByNameArgs {
    /**
     * Location hostName for the tenant
     */
    readonly hostName: string;
    /**
     * Unique name for the policy
     */
    readonly policyName: string;
    /**
     * select specific fields in entity.
     */
    readonly select?: string;
}

/**
 * Android Policy entity for Intune MAM.
 */
export interface GetAndroidMAMPolicyByNameResult {
    readonly accessRecheckOfflineTimeout?: string;
    readonly accessRecheckOnlineTimeout?: string;
    readonly appSharingFromLevel?: string;
    readonly appSharingToLevel?: string;
    readonly authentication?: string;
    readonly clipboardSharingLevel?: string;
    readonly dataBackup?: string;
    readonly description?: string;
    readonly deviceCompliance?: string;
    readonly fileEncryption?: string;
    readonly fileSharingSaveAs?: string;
    readonly friendlyName: string;
    readonly groupStatus: string;
    readonly lastModifiedTime: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    readonly managedBrowser?: string;
    /**
     * Resource name
     */
    readonly name: string;
    readonly numOfApps: number;
    readonly offlineWipeTimeout?: string;
    readonly pin?: string;
    readonly pinNumRetry?: number;
    readonly screenCapture?: string;
    /**
     * Resource Tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}