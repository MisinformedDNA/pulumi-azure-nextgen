// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getProductSetting(args: GetProductSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetProductSettingResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:securityinsights/v20190101preview:getProductSetting", {
        "operationalInsightsResourceProvider": args.operationalInsightsResourceProvider,
        "resourceGroupName": args.resourceGroupName,
        "settingsName": args.settingsName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetProductSettingArgs {
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    readonly operationalInsightsResourceProvider: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The setting name. Supports - EyesOn, EntityAnalytics, Ueba
     */
    readonly settingsName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}

/**
 * The Setting.
 */
export interface GetProductSettingResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The kind of the setting
     */
    readonly kind: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
