// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getSmartDetectorAlertRule(args: GetSmartDetectorAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSmartDetectorAlertRuleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:alertsmanagement/v20190601:getSmartDetectorAlertRule", {
        "alertRuleName": args.alertRuleName,
        "expandDetector": args.expandDetector,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetSmartDetectorAlertRuleArgs {
    /**
     * The name of the alert rule.
     */
    readonly alertRuleName: string;
    /**
     * Indicates if Smart Detector should be expanded.
     */
    readonly expandDetector?: boolean;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}

/**
 * The alert rule information
 */
export interface GetSmartDetectorAlertRuleResult {
    /**
     * The alert rule actions.
     */
    readonly actionGroups: outputs.alertsmanagement.v20190601.ActionGroupsInformationResponse;
    /**
     * The alert rule description.
     */
    readonly description?: string;
    /**
     * The alert rule's detector.
     */
    readonly detector: outputs.alertsmanagement.v20190601.DetectorResponse;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    readonly frequency: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The alert rule resources scope.
     */
    readonly scope: string[];
    /**
     * The alert rule severity.
     */
    readonly severity: string;
    /**
     * The alert rule state.
     */
    readonly state: string;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The alert rule throttling information.
     */
    readonly throttling?: outputs.alertsmanagement.v20190601.ThrottlingInformationResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}