import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getMasterSiteSite(args: GetMasterSiteSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetMasterSiteSiteResult>;
export interface GetMasterSiteSiteArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Site name.
     */
    readonly siteName: string;
}
/**
 * Site REST Resource.
 */
export interface GetMasterSiteSiteResult {
    /**
     * eTag for concurrency control.
     */
    readonly eTag?: string;
    /**
     * Azure location in which Sites is created.
     */
    readonly location?: string;
    /**
     * Name of the Master site.
     */
    readonly name?: string;
    /**
     * Nested properties of Master site.
     */
    readonly properties: outputs.offazure.v20200707.MasterSitePropertiesResponse;
    /**
     * Type of resource. Type = Microsoft.OffAzure/MasterSites.
     */
    readonly type: string;
}