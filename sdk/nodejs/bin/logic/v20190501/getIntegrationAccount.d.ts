import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIntegrationAccount(args: GetIntegrationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationAccountResult>;
export interface GetIntegrationAccountArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration account.
 */
export interface GetIntegrationAccountResult {
    /**
     * The integration service environment.
     */
    readonly integrationServiceEnvironment?: outputs.logic.v20190501.IntegrationServiceEnvironmentResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The sku.
     */
    readonly sku?: outputs.logic.v20190501.IntegrationAccountSkuResponse;
    /**
     * The workflow state.
     */
    readonly state?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}