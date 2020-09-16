// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getWebAppFunction(args: GetWebAppFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppFunctionResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:web/v20181101:getWebAppFunction", {
        "functionName": args.functionName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppFunctionArgs {
    /**
     * Function name.
     */
    readonly functionName: string;
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}

/**
 * Web Job Information.
 */
export interface GetWebAppFunctionResult {
    /**
     * Config information.
     */
    readonly config?: {[key: string]: any};
    /**
     * Config URI.
     */
    readonly configHref?: string;
    /**
     * File list.
     */
    readonly files?: {[key: string]: string};
    /**
     * Function App ID.
     */
    readonly functionAppId?: string;
    /**
     * Function URI.
     */
    readonly href?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Script URI.
     */
    readonly scriptHref?: string;
    /**
     * Script root path URI.
     */
    readonly scriptRootPathHref?: string;
    /**
     * Secrets file URI.
     */
    readonly secretsFileHref?: string;
    /**
     * Test data used when testing via the Azure Portal.
     */
    readonly testData?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}