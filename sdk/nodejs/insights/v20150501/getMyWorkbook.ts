// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getMyWorkbook(args: GetMyWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetMyWorkbookResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20150501:getMyWorkbook", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMyWorkbookArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    readonly resourceName: string;
}

/**
 * An Application Insights private workbook definition.
 */
export interface GetMyWorkbookResult {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: string;
    /**
     * The user-defined name of the private workbook.
     */
    readonly displayName: string;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Azure resource name
     */
    readonly name?: string;
    /**
     * Configuration of this particular private workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * Optional resourceId for a source resource.
     */
    readonly sourceId?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Date and time in UTC of the last modification that was made to this private workbook definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type?: string;
    /**
     * Unique user id of the specific user that owns this private workbook.
     */
    readonly userId: string;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked private workbook.
     */
    readonly version?: string;
}
