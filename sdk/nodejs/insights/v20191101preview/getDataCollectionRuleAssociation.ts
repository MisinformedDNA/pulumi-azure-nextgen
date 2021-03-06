// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

export function getDataCollectionRuleAssociation(args: GetDataCollectionRuleAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetDataCollectionRuleAssociationResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:insights/v20191101preview:getDataCollectionRuleAssociation", {
        "associationName": args.associationName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDataCollectionRuleAssociationArgs {
    /**
     * The name of the association.
     */
    readonly associationName: string;
    /**
     * The identifier of the resource.
     */
    readonly resourceUri: string;
}

/**
 * Definition of generic ARM proxy resource.
 */
export interface GetDataCollectionRuleAssociationResult {
    /**
     * The resource ID of the data collection rule that is to be associated.
     */
    readonly dataCollectionRuleId: string;
    /**
     * Description of the association.
     */
    readonly description?: string;
    /**
     * Resource entity tag (ETag).
     */
    readonly etag: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
