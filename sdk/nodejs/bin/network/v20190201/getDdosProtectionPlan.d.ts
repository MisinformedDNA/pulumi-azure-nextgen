import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDdosProtectionPlan(args: GetDdosProtectionPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosProtectionPlanResult>;
export interface GetDdosProtectionPlanArgs {
    /**
     * The name of the DDoS protection plan.
     */
    readonly ddosProtectionPlanName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * A DDoS protection plan in a resource group.
 */
export interface GetDdosProtectionPlanResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the DDoS protection plan resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
     */
    readonly virtualNetworks: outputs.network.v20190201.SubResourceResponse[];
}