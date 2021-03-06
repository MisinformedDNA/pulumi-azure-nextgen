// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getIotDefenderSetting(args?: GetIotDefenderSettingArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDefenderSettingResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:security/v20200806preview:getIotDefenderSetting", {
    }, opts);
}

export interface GetIotDefenderSettingArgs {
}

/**
 * IoT Defender settings
 */
export interface GetIotDefenderSettingResult {
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
